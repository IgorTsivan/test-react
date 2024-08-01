import ms from '../assets/images/ms.svg';
import visa from '../assets/images/vise.svg';
import skrill from '../assets/images/skrill.svg';
import payment1 from '../assets/images/payment1.svg';
import payment2 from '../assets/images/payment2.svg';
import payment3 from '../assets/images/payment3.svg';
import payment4 from '../assets/images/payment4.svg';
import btc from '../assets/images/btc.svg';
import eth from '../assets/images/eth.svg';
import trc from '../assets/images/teher.svg';
import { IPaymentMethods, PAYMENT_LABEL, PAYMENT_TYPE } from '../init/models/payment';

export const PAYMENT_METHODS_MOCK: IPaymentMethods[] = [
    {
        logo:  ms,
        label: PAYMENT_LABEL.POPULAR,
        title: 'Mastercard',
        text:  'Comission 3%',
        type:  PAYMENT_TYPE.FIAT,
    },
    {
        logo:  visa,
        label: PAYMENT_LABEL.TRUSTED,
        title: 'Visa',
        text:  'Comission 3%',
        type:  PAYMENT_TYPE.FIAT,
    },
    {
        logo:  skrill,
        title: 'Skrill',
        text:  'Comission 0%',
        type:  PAYMENT_TYPE.FIAT,
    },
    {
        logo:  payment1,
        title: 'Perfect Money, EUR',
        text:  'Comission 0%',
        type:  PAYMENT_TYPE.FIAT,
    },
    {
        logo:  payment2,
        title: 'Piastrix, EUR',
        text:  'Comission 0%',
        type:  PAYMENT_TYPE.FIAT,
    },
    {
        logo:  payment3,
        title: 'SticPay, EUR',
        text:  'Comission 0%',
        type:  PAYMENT_TYPE.FIAT,
    },
    {
        logo:  payment4,
        title: 'PIN',
        text:  'Comission 1%',
        type:  PAYMENT_TYPE.FIAT,
    },
    {
        logo:  btc,
        title: 'BTC',
        text:  'Comission 0%',
        type:  PAYMENT_TYPE.CRYPTO,
    },
    {
        logo:  eth,
        title: 'ETH',
        text:  'Comission 0%',
        type:  PAYMENT_TYPE.CRYPTO,
    },
    {
        logo:  trc,
        title: 'USDT',
        text:  'Comission 0%',
        type:  PAYMENT_TYPE.CRYPTO,
    },
];
