import { FC } from 'react';

import { Text } from '../Text';
import { PaymentCard } from '../PaymentCard';
import { IPaymentMethods } from '../../../init/models/payment';

import './styles.scss';

interface PaymentsListProps {
    title: string;
    paymentMethods: IPaymentMethods[]
}

export const PaymentsList:FC<PaymentsListProps> = ({ title, paymentMethods }) => {
    return (
        <div className = 'paymentsList'>
            <Text
                className = 'paymentsList_title'
                type = 'text-body'>{title}</Text>
            <div className = 'paymentsList_list'>
                {
                    paymentMethods.map(({ text, logo, title, label }) => {
                        return (
                            <PaymentCard
                                key = { title }
                                label = { label }
                                logo = { logo }
                                text = { text }
                                title = { title } />
                        );
                    })
                }
            </div>
        </div>
    );
};
