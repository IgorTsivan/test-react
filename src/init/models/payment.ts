export enum PAYMENT_LABEL  {
    POPULAR = 'POPULAR',
    TRUSTED = 'TRUSTED'
}

export enum PAYMENT_TYPE  {
    FIAT = 'FIAT',
    CRYPTO = 'CRYPTO'
}

export interface IPaymentMethods {
    label?: PAYMENT_LABEL;
    text: string;
    logo: string;
    title: string;
    type: PAYMENT_TYPE;
}
