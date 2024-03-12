"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoloWalletSigner = void 0;
const index_1 = require("./index");
const error_1 = require("../error");
const utils_1 = require("../utils");
const moment_1 = __importDefault(require("moment"));
class SoloWalletSigner extends index_1.SologenicTxSigner {
    constructor(options) {
        super(options);
        this.server_url = '';
        this.container_id = '';
        this.address = '';
        this.fallback_container_id = '';
        this.is_mobile = false;
        this.deeplink_url = '';
        this.signerID = 'solo_wallet';
        if (options.hasOwnProperty('server')) {
            this.server_url = options['server'];
        }
        else {
            throw new Error('Server url missing.');
        }
        if (options.hasOwnProperty('container_id')) {
            this.container_id = options['container_id'];
        }
        else {
            throw new Error('Container ID missing.');
        }
        if (options.hasOwnProperty('fallback_container_id')) {
            this.fallback_container_id = options['fallback_container_id'];
        }
        else {
            throw new Error('Fallback container ID missing.');
        }
        if (options.hasOwnProperty('is_mobile')) {
            this.is_mobile = options['is_mobile'];
        }
        if (options.hasOwnProperty('deeplink_url')) {
            this.deeplink_url = options['deeplink_url'];
        }
        this.includeSequence = true;
    }
    async requestConnection() {
        const tx_json = {
            TransactionType: 'NickNameSet',
            TransactionKind: 'SignIn'
        };
        const connectionRefs = await (0, utils_1.httpRequest)(this.server_url + 'issuer/transactions', 'post', {}, JSON.stringify({
            tx_json: tx_json,
            options: {
                expires_at: (0, moment_1.default)()
                    .add(10, 'm')
                    .toISOString()
            }
        }));
        var signed_tx;
        if (connectionRefs.refs) {
            let qrCode = document.createElement('img');
            qrCode.setAttribute('src', connectionRefs.refs.qr);
            qrCode.setAttribute('alt', 'QR Code');
            let container = document.getElementById(this.container_id);
            container.appendChild(qrCode);
            if (this.is_mobile && this.deeplink_url) {
                let deepLink = document.createElement('a');
                const link = `https://solodex.page.link/?link=${connectionRefs.refs.deeplink}&apn=com.sologenicwallet&isi=1497396455&ibi=org.reactjs.native.example.SologenicWallet`;
                deepLink.setAttribute('href', link);
                deepLink.setAttribute('target', '_blank');
                deepLink.setAttribute('rel', 'noopener noreferrer');
                deepLink.innerText = 'SOLO Wallet >';
                container.appendChild(deepLink);
            }
            const socket = new WebSocket(connectionRefs.refs.ws);
            var isSocketOpen = false;
            const expires_at = (0, moment_1.default)()
                .add(10, 'm')
                .valueOf();
            var socket_interval = null;
            var socketResponse = {
                updated: false,
                data: null
            };
            socket.addEventListener('open', () => {
                isSocketOpen = true;
                socket_interval = setInterval(() => {
                    socket.send('ping');
                }, 5000);
            });
            socket.addEventListener('message', message => {
                if (message.data !== 'pong') {
                    const { data } = message;
                    if (JSON.parse(data).hasOwnProperty('meta') &&
                        (JSON.parse(data).meta.hasOwnProperty('signed') ||
                            JSON.parse(data).meta.hasOwnProperty('cancelled'))) {
                        socketResponse = {
                            updated: true,
                            data: JSON.parse(message.data)
                        };
                    }
                }
            });
            socket.onerror = event => {
                throw new Error('WebSocket error: ' + event);
            };
            while (true) {
                if ((0, moment_1.default)().valueOf() > expires_at) {
                    if (isSocketOpen) {
                        socket.close();
                        clearInterval(socket_interval);
                        throw new Error('Timed out. No response from server.');
                    }
                    else {
                        throw new Error('Unable to establish connection with the server.');
                    }
                }
                if (socketResponse.updated) {
                    socket.close();
                    clearInterval(socket_interval);
                    break;
                }
                await (0, utils_1.wait)(1000);
            }
            if (socketResponse.updated) {
                let data = socketResponse.data;
                let meta = data.meta;
                if (meta.hasOwnProperty('cancelled') && meta.cancelled) {
                    throw new error_1.SologenicError('2004');
                }
                signed_tx = await (0, utils_1.httpRequest)(this.server_url +
                    'issuer/transactions/' +
                    connectionRefs.meta.identifier, 'get', {}, '');
                if (sessionStorage.mode && sessionStorage.mode === '_testnet') {
                    localStorage.swToken_testnet = JSON.stringify({
                        push_token: meta.push_token,
                        signer: signed_tx.signer
                    });
                }
                else {
                    localStorage.swToken = JSON.stringify({
                        push_token: meta.push_token,
                        signer: signed_tx.signer
                    });
                }
            }
        }
        this.address = signed_tx.signer ? signed_tx.signer : '';
        return {
            address: signed_tx.signer ? signed_tx.signer : null
        };
    }
    async sign(txJson, txId, _account, _signingOptions = {}) {
        try {
            // Delete the transaction metadata if it exists since the signing will fail
            // as this TransactionMetadata is not known to the schema.
            if (txJson.TransactionMetadata)
                delete txJson.TransactionMetadata;
            if (txJson.LastLedgerSequence)
                txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 1000;
            var pushToken = (0, utils_1.getToken)(txJson.Account, 'solo');
            const tx_init = await (0, utils_1.httpRequest)(this.server_url + 'issuer/transactions', 'post', {}, JSON.stringify({
                tx_json: txJson,
                options: Object.assign(Object.assign({}, (pushToken ? { push_token: pushToken } : {})), { expires_at: (0, moment_1.default)()
                        .add(10, 'm')
                        .toISOString() })
            }));
            var signed_tx;
            if (tx_init.refs) {
                this.signing_refs = tx_init;
                const socket = new WebSocket(tx_init.refs.ws);
                var isSocketOpen = false;
                const expires_at = (0, moment_1.default)()
                    .add(10, 'm')
                    .valueOf();
                var socket_interval = null;
                var socketResponse = {
                    updated: false,
                    data: null
                };
                socket.addEventListener('open', () => {
                    isSocketOpen = true;
                    socket_interval = setInterval(() => {
                        socket.send('ping');
                    }, 5000);
                });
                socket.addEventListener('message', message => {
                    if (message.data !== 'pong') {
                        const { data } = message;
                        if (JSON.parse(data).hasOwnProperty('meta') &&
                            (JSON.parse(data).meta.hasOwnProperty('signed') ||
                                JSON.parse(data).meta.hasOwnProperty('cancelled'))) {
                            socketResponse = {
                                updated: true,
                                data: JSON.parse(message.data)
                            };
                        }
                    }
                });
                socket.onerror = event => {
                    throw new Error('WebSocket error: ' + event);
                };
                while (true) {
                    if ((0, moment_1.default)().valueOf() > expires_at) {
                        if (isSocketOpen) {
                            socket.close();
                            clearInterval(socket_interval);
                            throw new Error('Timed out. No response from server.');
                        }
                        else {
                            throw new Error('Unable to establish connection with the server.');
                        }
                    }
                    if (this.cancelled) {
                        if (isSocketOpen) {
                            socket.close();
                            clearInterval(socket_interval);
                        }
                        this.cancelled = false;
                        throw new error_1.SologenicError('2005');
                    }
                    if (socketResponse.updated) {
                        socket.close();
                        clearInterval(socket_interval);
                        break;
                    }
                    await (0, utils_1.wait)(1000);
                }
                if (socketResponse.updated) {
                    let data = socketResponse.data;
                    let meta = data.meta;
                    if (meta.hasOwnProperty('cancelled') && meta.cancelled === true) {
                        throw new error_1.SologenicError('2003');
                    }
                    signed_tx = await (0, utils_1.httpRequest)(this.server_url + 'issuer/transactions/' + tx_init.meta.identifier, 'get', {}, '');
                    if (sessionStorage.mode && sessionStorage.mode === '_testnet') {
                        localStorage.swToken_testnet = JSON.stringify({
                            push_token: meta.push_token,
                            signer: signed_tx.signer
                        });
                    }
                    else {
                        localStorage.swToken = JSON.stringify({
                            push_token: meta.push_token,
                            signer: signed_tx.signer
                        });
                    }
                }
            }
            this.signing_refs = '';
            if (signed_tx.tx_hex) {
                return {
                    id: txId,
                    signedTransaction: signed_tx.tx_hex,
                    tx_blob: signed_tx.tx_hex
                };
            }
            else {
                throw new error_1.SologenicError('1000');
            }
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    showSigningQRcode() {
        const qr = document.getElementById('qr-code-img');
        if (!qr) {
            let qrCode = document.createElement('img');
            qrCode.setAttribute('src', this.signing_refs.refs.qr);
            qrCode.setAttribute('alt', 'QR Code');
            qrCode.setAttribute('id', 'qr-code-img');
            let container = document.getElementById(this.fallback_container_id);
            container.appendChild(qrCode);
            if (this.is_mobile && this.deeplink_url) {
                let deepLink = document.createElement('a');
                const link = `https://solodex.page.link/?link=${this.signing_refs.refs.deeplink}&apn=com.sologenicwallet&isi=1497396455&ibi=org.reactjs.native.example.SologenicWallet`;
                // deepLink.setAttribute('href', this.signing_refs.refs.deeplink);
                deepLink.setAttribute('href', link);
                // deepLink.setAttribute('target', '_blank');
                deepLink.setAttribute('rel', 'noopener noreferrer');
                deepLink.innerText = 'SOLO Wallet >';
                container.appendChild(deepLink);
            }
        }
    }
}
exports.SoloWalletSigner = SoloWalletSigner;
