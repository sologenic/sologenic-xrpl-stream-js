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
        const connectionRefs = await utils_1.httpRequest(this.server_url + 'issuer/transactions', 'post', {}, JSON.stringify({
            tx_json: tx_json,
            options: {
                expires_at: moment_1.default()
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
                deepLink.setAttribute('href', connectionRefs.refs.deeplink);
                deepLink.setAttribute('target', '_blank');
                deepLink.setAttribute('rel', 'noopener noreferrer');
                deepLink.innerText = 'SOLO Wallet >';
                container.appendChild(deepLink);
            }
            const socket = new WebSocket(connectionRefs.refs.ws);
            var isSocketOpen = false;
            const expires_at = moment_1.default()
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
                if (moment_1.default().valueOf() > expires_at) {
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
                await utils_1.wait(1000);
            }
            if (socketResponse.updated) {
                let data = socketResponse.data;
                let meta = data.meta;
                if (meta.hasOwnProperty('cancelled') && meta.cancelled) {
                    throw new error_1.SologenicError('2004');
                }
                signed_tx = await utils_1.httpRequest(this.server_url +
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
                txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 100;
            var pushToken = utils_1.getToken(txJson.Account, 'solo');
            const tx_init = await utils_1.httpRequest(this.server_url + 'issuer/transactions', 'post', {}, JSON.stringify({
                tx_json: txJson,
                options: Object.assign(Object.assign({}, (pushToken ? { push_token: pushToken } : {})), { expires_at: moment_1.default()
                        .add(10, 'm')
                        .toISOString() })
            }));
            var signed_tx;
            if (tx_init.refs) {
                this.signing_refs = tx_init;
                const socket = new WebSocket(tx_init.refs.ws);
                var isSocketOpen = false;
                const expires_at = moment_1.default()
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
                    if (moment_1.default().valueOf() > expires_at) {
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
                    await utils_1.wait(1000);
                }
                if (socketResponse.updated) {
                    let data = socketResponse.data;
                    let meta = data.meta;
                    if (meta.hasOwnProperty('cancelled') && meta.cancelled === true) {
                        throw new error_1.SologenicError('2003');
                    }
                    signed_tx = await utils_1.httpRequest(this.server_url + 'issuer/transactions/' + tx_init.meta.identifier, 'get', {}, '');
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
                    signedTransaction: signed_tx.tx_hex
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
        let qrCode = document.createElement('img');
        qrCode.setAttribute('src', this.signing_refs.refs.qr);
        qrCode.setAttribute('alt', 'QR Code');
        let container = document.getElementById(this.fallback_container_id);
        container.appendChild(qrCode);
        if (this.is_mobile && this.deeplink_url) {
            let deepLink = document.createElement('a');
            deepLink.setAttribute('href', this.signing_refs.refs.deeplink);
            deepLink.setAttribute('target', '_blank');
            deepLink.setAttribute('rel', 'noopener noreferrer');
            deepLink.innerText = 'SOLO Wallet >';
            container.appendChild(deepLink);
        }
    }
}
exports.SoloWalletSigner = SoloWalletSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sb19zaWduZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NpZ25pbmcvc29sb19zaWduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsbUNBQTRDO0FBQzVDLG9DQUEwQztBQUMxQyxvQ0FBdUQ7QUFFdkQsb0RBQTRCO0FBRTVCLE1BQWEsZ0JBQWlCLFNBQVEseUJBQWlCO0lBV3JELFlBQVksT0FBWTtRQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFYUCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBQ25DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFFcEMsYUFBUSxHQUFXLGFBQWEsQ0FBQztRQUsvQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFD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