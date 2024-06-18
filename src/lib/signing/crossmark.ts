import { Transaction } from 'xrpl';
import Crossmark from '@crossmarkio/sdk';

export type ISignInTX = Transaction & {
  TransactionKind: string;
};

export interface ISignedTx {
  id?: string;
  tx_blob?: string;
  tx_hex?: string;
  push_token?: string;
  signer?: string;
  tx: Transaction | ISignInTX;
  hash?: string;
  cancelled?: boolean;
  expired?: boolean;
}

interface ICrossmarkSignerProps {
  address?: string;
}

export class CrossmarkSigner {
  private _address: string;

  get address() {
    return this._address;
  }

  get currentTxRefs() {
    return undefined;
  }

  constructor(props?: ICrossmarkSignerProps) {
    this._address = props?.address;
  }

  async requestConnection() {
    try {
      const { response } = await Crossmark.methods.signInAndWait();

      if (response.data.address) {
        this._address = response.data.address;
        return { address: this._address };
      }

      if (response.data.meta.isRejected) {
        throw 'connection rejected';
      }

      throw response;
    } catch (e) {
      throw {
        thrower: 'Crossmark.requestConnection',
        error: e
      };
    }
  }

  async sign(tx: Transaction): Promise<ISignedTx> {
    try {
      const { response } = await Crossmark.methods.signAndWait(tx as any);

      if (response.data.meta.isSigned && response.data.meta.isSuccess) {
        return { tx_blob: response.data.txBlob, tx: tx, signer: this._address };
      }

      if (response.data.meta.isRejected) {
        throw 'tx_rejected';
      }

      throw response;
    } catch (e) {
      throw {
        thrower: 'Crossmark.sign',
        error: e
      };
    }
  }
}
