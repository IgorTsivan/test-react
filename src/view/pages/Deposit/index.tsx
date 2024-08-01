import { Header } from '../../components/Header';
import { PromocodeBlock } from '../../components/PromocodeBlock';
import { Center } from '../../components/Center';
import { Text } from '../../components/Text';
import { PaymentsList } from '../../components/PaymentsList';
import { TransactionList } from '../../components/TransactionList';
import { usePaymentMethods } from '../../../init/tools/hook/usePaymentMethods';
import { PAYMENT_METHODS_MOCK } from '../../../mock/paymentMethods';
import { TRANSACTIONS_MOCK } from '../../../mock/transaction';

import './styles.scss';

export const DepositPage = () => {
    const { crypto, fiat } = usePaymentMethods(PAYMENT_METHODS_MOCK);
    const transactions = TRANSACTIONS_MOCK;

    return (
        <div className = 'deposit' >
            <Header />
            <Center>
                <Text
                    className = 'deposit_title'
                    type = 'title-h1'>Make a Deposit</Text>
                <Text
                    className = 'deposit_subtitle'
                    type = 'title-h2'>Choose payment method</Text>
                <PaymentsList
                    paymentMethods = { fiat }
                    title = 'Cards, E-Money, PIN' />
                <PaymentsList
                    paymentMethods = { crypto }
                    title = 'Cryptocurrency' />
                <PromocodeBlock />
            </Center>
            <TransactionList transactions = { transactions } />
        </div>
    );
};
