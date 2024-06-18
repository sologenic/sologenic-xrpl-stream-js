import { Transaction } from 'xrpl';
import Crossmark from '@crossmarkio/sdk';
import { SologenicError } from '../error';
import SologenicTxSigner from './sologenic_tx_signer';
import * as SologenicTypes from '../../types';
import XrplAccount from '../account';

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

export class CrossmarkSigner extends SologenicTxSigner {
  private _address: string;

  get address() {
    return this._address;
  }

  get currentTxRefs() {
    return undefined;
  }

  constructor(props?: ICrossmarkSignerProps) {
    super(props);
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
        throw new SologenicError('2003');
      }

      throw new SologenicError('1000');
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async sign(
    txJson: SologenicTypes.TX,
    txId: string
  ): Promise<SologenicTypes.SignedTx> {
    try {
      const { response } = await Crossmark.methods.signAndWait(txJson as any);

      if (response.data.meta.isSigned && response.data.meta.isSuccess) {
        return {
          id: txId,
          tx_blob: response.data.txBlob,
          signedTransaction: response.data.txBlob
          //   tx: tx,
          //   signer: this._address
        };
      }

      if (response.data.meta.isRejected) {
        throw new SologenicError('2003');
      }

      throw new SologenicError('1000');
    } catch (e) {
      throw new Error(e.message);
      //   throw {
      //     thrower: 'Crossmark.sign',
      //     error: e
      //   };
    }
  }
}
