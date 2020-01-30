[typescript](../README.md) › [Globals](../globals.md) › [BookOffer](bookoffer.md)

# Interface: BookOffer

## Hierarchy

* [OfferLedgerEntry](offerledgerentry.md)

  ↳ **BookOffer**

## Index

### Properties

* [Account](bookoffer.md#account)
* [BookDirectory](bookoffer.md#bookdirectory)
* [BookNode](bookoffer.md#booknode)
* [Expiration](bookoffer.md#optional-expiration)
* [Flags](bookoffer.md#flags)
* [LedgerEntryType](bookoffer.md#ledgerentrytype)
* [OwnerNode](bookoffer.md#ownernode)
* [PreviousTxnID](bookoffer.md#previoustxnid)
* [PreviousTxnLgrSeq](bookoffer.md#previoustxnlgrseq)
* [Sequence](bookoffer.md#sequence)
* [TakerGets](bookoffer.md#takergets)
* [TakerPays](bookoffer.md#takerpays)
* [owner_funds](bookoffer.md#optional-owner_funds)
* [quality](bookoffer.md#optional-quality)
* [taker_gets_funded](bookoffer.md#optional-taker_gets_funded)
* [taker_pays_funded](bookoffer.md#optional-taker_pays_funded)

## Properties

###  Account

• **Account**: *string*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[Account](offerledgerentry.md#account)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:105

___

###  BookDirectory

• **BookDirectory**: *string*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[BookDirectory](offerledgerentry.md#bookdirectory)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:109

___

###  BookNode

• **BookNode**: *string*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[BookNode](offerledgerentry.md#booknode)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:110

___

### `Optional` Expiration

• **Expiration**? : *undefined | number*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[Expiration](offerledgerentry.md#optional-expiration)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:114

___

###  Flags

• **Flags**: *number*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[Flags](offerledgerentry.md#flags)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:104

___

###  LedgerEntryType

• **LedgerEntryType**: *"Offer"*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[LedgerEntryType](offerledgerentry.md#ledgerentrytype)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:103

___

###  OwnerNode

• **OwnerNode**: *string*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[OwnerNode](offerledgerentry.md#ownernode)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:111

___

###  PreviousTxnID

• **PreviousTxnID**: *string*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[PreviousTxnID](offerledgerentry.md#previoustxnid)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:112

___

###  PreviousTxnLgrSeq

• **PreviousTxnLgrSeq**: *number*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[PreviousTxnLgrSeq](offerledgerentry.md#previoustxnlgrseq)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:113

___

###  Sequence

• **Sequence**: *number*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[Sequence](offerledgerentry.md#sequence)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:106

___

###  TakerGets

• **TakerGets**: *[RippledAmount](../globals.md#rippledamount)*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[TakerGets](offerledgerentry.md#takergets)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:108

___

###  TakerPays

• **TakerPays**: *[RippledAmount](../globals.md#rippledamount)*

*Inherited from [OfferLedgerEntry](offerledgerentry.md).[TakerPays](offerledgerentry.md#takerpays)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/ledger_entries.d.ts:107

___

### `Optional` owner_funds

• **owner_funds**? : *undefined | string*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/book_offers.d.ts:20

___

### `Optional` quality

• **quality**? : *undefined | string*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/book_offers.d.ts:19

___

### `Optional` taker_gets_funded

• **taker_gets_funded**? : *[RippledAmount](../globals.md#rippledamount)*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/book_offers.d.ts:21

___

### `Optional` taker_pays_funded

• **taker_pays_funded**? : *[RippledAmount](../globals.md#rippledamount)*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/book_offers.d.ts:22
