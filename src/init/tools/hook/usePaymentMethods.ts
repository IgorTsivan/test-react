import { IPaymentMethods, PAYMENT_TYPE } from '../../models/payment';

export const usePaymentMethods = (methods: IPaymentMethods[]) => {
    const fiat = methods.filter((payment) => payment.type === PAYMENT_TYPE.FIAT);
    const crypto = methods.filter((payment) => payment.type === PAYMENT_TYPE.CRYPTO);

    return {
        fiat,
        crypto,
    };
};
