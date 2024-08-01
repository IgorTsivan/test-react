export enum TRANSACTION_STATUS {
    PROCESSING = 'Processing',
    ACTIVE = 'Active',
    PERFORMED = 'Performed',
    FAILED = 'Failed'
}

export interface ITransaction {
    status:        TRANSACTION_STATUS,
    amount:        string,
    date:          string,
    id:            string,
    icon:          string,
    paymentMethod: string,
}
