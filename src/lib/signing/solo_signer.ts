import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import { SologenicTxSigner } from './index';
import { SologenicError } from '../error';
import { httpRequest, wait, getToken } from '../utils';
import { SoloWalletSignerSubmitPayload } from '../../types/api_signer';
import moment from 'moment';

export class SoloWalletSigner extends SologenicTxSigner {
  protected server_url: string = '';
  protected container_id: string = '';
  protected address: string = '';
  protected signing_refs: any;
  protected fallback_container_id: string = '';
  protected is_mobile: boolean = false;
  protected deeplink_url: string = '';

  signerID: string = 'solo_wallet';

  constructor(options: any) {
    super(options);

    if (options.hasOwnProperty('server')) {
      this.server_url = options['server'];
    } else {
      throw new Error('Server url missing.');
    }

    if (options.hasOwnProperty('container_id')) {
      this.container_id = options['container_id'];
    } else {
      throw new Error('Container ID missing.');
    }

    if (options.hasOwnProperty('fallback_container_id')) {
      this.fallback_container_id = options['fallback_container_id'];
    } else {
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

  async requestConnection(): Promise<SologenicTypes.SignerConnectionRef> {
    const tx_json = {
      TransactionType: 'NickNameSet',
      TransactionKind: 'SignIn'
    };

    const connectionRefs = await httpRequest<SoloWalletSignerSubmitPayload>(
      this.server_url + 'issuer/transactions',
      'post',
      {},
      JSON.stringify({
        tx_json: tx_json,
        options: {
          expires_at: moment()
            .add(10, 'm')
            .toISOString()
        }
      })
    );

    var signed_tx: any;

    if (connectionRefs.refs) {
      let qrCode = document.createElement('img');
      qrCode.setAttribute('src', connectionRefs.refs.qr);
      qrCode.setAttribute('alt', 'QR Code');

      let container: any = document.getElementById(this.container_id);

      container.appendChild(qrCode);

      if (this.is_mobile && this.deeplink_url) {
        let deepLink = document.createElement('a');

        deepLink.setAttribute('href', connectionRefs.refs.deeplink);
        deepLink.setAttribute('target', '_blank');
        deepLink.setAttribute('rel', 'noopener noreferrer');
        deepLink.innerText = 'SOLO Wallet >';

        container.appendChild(deepLink);
      }

      const socket: WebSocket = new WebSocket(connectionRefs.refs.ws);
      var isSocketOpen = false;
      const expires_at = moment()
        .add(10, 'm')
        .valueOf();

      var socket_interval: any = null;

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

          if (
            JSON.parse(data).hasOwnProperty('meta') &&
            (JSON.parse(data).meta.hasOwnProperty('signed') ||
              JSON.parse(data).meta.hasOwnProperty('cancelled'))
          ) {
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
        if (moment().valueOf() > expires_at) {
          if (isSocketOpen) {
            socket.close();
            clearInterval(socket_interval);
            throw new Error('Timed out. No response from server.');
          } else {
            throw new Error('Unable to establish connection with the server.');
          }
        }

        if (socketResponse.updated) {
          socket.close();
          clearInterval(socket_interval);
          break;
        }

        await wait(1000);
      }

      if (socketResponse.updated) {
        let data: any = socketResponse.data;
        let meta: any = data.meta;

        if (meta.hasOwnProperty('cancelled') && meta.cancelled) {
          throw new SologenicError('2004');
        }

        signed_tx = await httpRequest<SoloWalletSignerSubmitPayload>(
          this.server_url +
            'issuer/transactions/' +
            connectionRefs.meta.identifier,
          'get',
          {},
          ''
        );

        if (sessionStorage.mode && sessionStorage.mode === '_testnet') {
          localStorage.swToken_testnet = JSON.stringify({
            push_token: meta.push_token,
            signer: signed_tx.signer
          });
        } else {
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

  async sign(
    txJson: SologenicTypes.TX,
    txId: string,
    _account?: XrplAccount,
    _signingOptions: any = {}
  ): Promise<SologenicTypes.SignedTx> {
    try {
      // Delete the transaction metadata if it exists since the signing will fail
      // as this TransactionMetadata is not known to the schema.
      if (txJson.TransactionMetadata) delete txJson.TransactionMetadata;

      if (txJson.LastLedgerSequence)
        txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 100;

      var pushToken = getToken(txJson.Account, 'solo');

      const tx_init = await httpRequest<SoloWalletSignerSubmitPayload>(
        this.server_url + 'issuer/transactions',
        'post',
        {},
        JSON.stringify({
          tx_json: txJson,
          options: {
            ...(pushToken ? { push_token: pushToken } : {}),
            expires_at: moment()
              .add(10, 'm')
              .toISOString()
          }
        })
      );

      var signed_tx: any;

      if (tx_init.refs) {
        this.signing_refs = tx_init;

        const socket: WebSocket = new WebSocket(tx_init.refs.ws);
        var isSocketOpen = false;
        const expires_at = moment()
          .add(10, 'm')
          .valueOf();

        var socket_interval: any = null;

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

            if (
              JSON.parse(data).hasOwnProperty('meta') &&
              (JSON.parse(data).meta.hasOwnProperty('signed') ||
                JSON.parse(data).meta.hasOwnProperty('cancelled'))
            ) {
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
          if (moment().valueOf() > expires_at) {
            if (isSocketOpen) {
              socket.close();
              clearInterval(socket_interval);
              throw new Error('Timed out. No response from server.');
            } else {
              throw new Error(
                'Unable to establish connection with the server.'
              );
            }
          }

          if (this.cancelled) {
            if (isSocketOpen) {
              socket.close();
              clearInterval(socket_interval);
            }

            this.cancelled = false;
            throw new SologenicError('2005');
          }

          if (socketResponse.updated) {
            socket.close();
            clearInterval(socket_interval);
            break;
          }

          await wait(1000);
        }

        if (socketResponse.updated) {
          let data: any = socketResponse.data;
          let meta: any = data.meta;

          if (meta.hasOwnProperty('cancelled') && meta.cancelled === true) {
            throw new SologenicError('2003');
          }

          signed_tx = await httpRequest<SoloWalletSignerSubmitPayload>(
            this.server_url + 'issuer/transactions/' + tx_init.meta.identifier,
            'get',
            {},
            ''
          );

          if (sessionStorage.mode && sessionStorage.mode === '_testnet') {
            localStorage.swToken_testnet = JSON.stringify({
              push_token: meta.push_token,
              signer: signed_tx.signer
            });
          } else {
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
      } else {
        throw new SologenicError('1000');
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  showSigningQRcode() {
    let qrCode = document.createElement('img');

    qrCode.setAttribute('src', this.signing_refs.refs.qr);
    qrCode.setAttribute('alt', 'QR Code');

    let container: any = document.getElementById(this.fallback_container_id);
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
