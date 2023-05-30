export interface Issue {
    currency: string;
    issuer?: string;
    value?: string | number;
}
export interface MarketItem {
    issuer?: string;
    currency: string;
}
export interface Market {
    base: MarketItem;
    counter: MarketItem;
}
export interface Orderbook {
    buy: BookOffer[];
    sell: BookOffer[];
}
export interface FormattedOrderbook {
    bids: ParsedBookOffer[];
    asks: ParsedBookOffer[];
}
export interface BookOffer {
    LedgerEntryType: 'Offer';
    Flags: number;
    Account: string;
    Sequence: number;
    TakerPays: Issue | string;
    TakerGets: Issue | string;
    BookDirectory: string;
    BookNode: string;
    OwnerNode: string;
    PreviousTxnID: string;
    PreviousTxnLgrSeq: number;
    Expiration?: number;
    quality?: string;
    owner_funds?: string;
    taker_gets_funded?: Issue | string;
    taker_pays_funded?: Issue | string;
}
export interface Specification {
    totalPrice: Issue;
    quantity: Issue;
    direction: string;
}
export interface ParsedBookOffer {
    specification: Specification;
    properties?: object;
    state?: object;
    data: object;
}
