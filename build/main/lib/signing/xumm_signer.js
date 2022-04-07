"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XummWalletSigner = void 0;
const index_1 = require("./index");
const error_1 = require("../error");
const utils_1 = require("../utils");
const moment_1 = __importDefault(require("moment"));
class XummWalletSigner extends index_1.SologenicTxSigner {
    constructor(options) {
        super(options);
        this.server_url = '';
        this.container_id = '';
        this.address = '';
        this.fallback_container_id = '';
        this.is_mobile = false;
        this.signerID = 'xumm';
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
        this.includeSequence = true;
    }
    async requestConnection() {
        const tx_json = {
            TransactionType: 'SignIn'
            // TransactionKind: 'SignIn'
        };
        const connectionRefs = await utils_1.httpRequest(this.server_url + 'xumm/payload', 'post', {}, JSON.stringify({
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
            if (this.is_mobile) {
                let deepLink = document.createElement('a');
                deepLink.setAttribute('href', connectionRefs.refs.deeplink);
                deepLink.setAttribute('target', '_blank');
                deepLink.setAttribute('rel', 'noopener noreferrer');
                deepLink.innerText = 'XUMM Wallet >';
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
                    if (JSON.parse(data).hasOwnProperty('signed')) {
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
                if (data.hasOwnProperty('signed') && !data.signed) {
                    throw new error_1.SologenicError('2004');
                }
                signed_tx = await this.checkForSigned(this.server_url, connectionRefs.meta.identifier);
            }
        }
        this.address = signed_tx.signer;
        return {
            address: signed_tx.signer
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
            var pushToken = utils_1.getToken(txJson.Account, 'xumm');
            const tx_init = await utils_1.httpRequest(this.server_url + 'xumm/payload', 'post', {}, JSON.stringify({
                tx_json: txJson,
                options: Object.assign(Object.assign({ submit: false }, (pushToken ? { push_token: pushToken } : {})), { expires_at: moment_1.default()
                        .add(10, 'm')
                        .toISOString() })
            }));
            var signed_tx;
            if (tx_init.refs) {
                this.signing_refs = tx_init.refs;
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
                        if (JSON.parse(data).hasOwnProperty('signed')) {
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
                    if (data.hasOwnProperty('signed') && !data.signed) {
                        throw new error_1.SologenicError('2003');
                    }
                    signed_tx = await this.checkForSigned(this.server_url, data.payload_uuidv4);
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
            if (e.message === 'connection_error') {
                throw new error_1.SologenicError('1003');
            }
            throw new Error(e.message);
        }
    }
    showSigningQRcode() {
        let qrCode = document.createElement('img');
        qrCode.setAttribute('src', this.signing_refs.qr);
        qrCode.setAttribute('alt', 'QR Code');
        let container = document.getElementById(this.fallback_container_id);
        container.appendChild(qrCode);
        if (this.is_mobile) {
            let deepLink = document.createElement('a');
            deepLink.setAttribute('href', this.signing_refs.deeplink);
            deepLink.setAttribute('target', '_blank');
            deepLink.setAttribute('rel', 'noopener noreferrer');
            deepLink.innerText = 'XUMM Wallet >';
            container.appendChild(deepLink);
        }
    }
    async checkForSigned(url, id) {
        let waitTime = 100;
        while (true) {
            try {
                const signedTx = await utils_1.httpRequest(url + 'xumm/payload/' + id, 'get', {}, '');
                if (signedTx.hasOwnProperty('signer')) {
                    if (sessionStorage.mode && sessionStorage.mode === '_testnet') {
                        localStorage.xummToken_testnet = JSON.stringify({
                            push_token: signedTx.meta.push_token,
                            signer: signedTx.signer
                        });
                    }
                    else {
                        localStorage.xummToken = JSON.stringify({
                            push_token: signedTx.meta.push_token,
                            signer: signedTx.signer
                        });
                    }
                    return signedTx;
                }
                if (signedTx.hasOwnProperty('meta') &&
                    !signedTx.meta.signed &&
                    waitTime < 1000) {
                    waitTime *= 2;
                    throw new Error('try again');
                }
                else {
                    throw new Error('throw unspecified error');
                }
            }
            catch (e) {
                if (e === 'throw error') {
                    throw new error_1.SologenicError('1001');
                }
                if (e.message === 'Error: Request failed with status code 500') {
                    throw new error_1.SologenicError('1003');
                }
                if (e === 'try again') {
                    await utils_1.wait(waitTime);
                }
            }
        }
    }
}
exports.XummWalletSigner = XummWalletSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHVtbV9zaWduZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NpZ25pbmcveHVtbV9zaWduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsbUNBQTRDO0FBQzVDLG9DQUEwQztBQUMxQyxvQ0FBdUQ7QUFFdkQsb0RBQTRCO0FBRTVCLE1BQWEsZ0JBQWlCLFNBQVEseUJBQWlCO0lBU3JELFlBQVksT0FBWTtRQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFUUCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBQ25DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDckMsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUt4QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDbkQ7UUFF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