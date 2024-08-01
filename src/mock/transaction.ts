import stickpay_trx from '../assets/images/trx_stickpay.svg';
import ms_trx from '../assets/images/trx_ms.svg';
import { ITransaction, TRANSACTION_STATUS } from '../init/models/transaction';

export const TRANSACTIONS_MOCK: ITransaction[] = [
    {
        status:        TRANSACTION_STATUS.PROCESSING,
        amount:        '23.05$',
        date:          '02.01 at 12:34PM',
        id:            '142354',
        icon:          stickpay_trx,
        paymentMethod: 'by SticPay, USD',
    },
    {
        status:        TRANSACTION_STATUS.ACTIVE,
        amount:        '123.27$',
        date:          '05.12 at 3:40PM',
        id:            '142355',
        icon:          stickpay_trx,
        paymentMethod: 'by SticPay, USD',
    },
    {
        status:        TRANSACTION_STATUS.PERFORMED,
        amount:        '80.00$',
        date:          '24.11 at 4:20AM',
        id:            '142356',
        icon:          ms_trx,
        paymentMethod: 'by Mastercard, USD',
    },
    {
        status:        TRANSACTION_STATUS.FAILED,
        amount:        '23.05$',
        date:          '02.01 at 12:34PM',
        id:            '142357',
        icon:          stickpay_trx,
        paymentMethod: 'by SticPay, USD',
    },
];
