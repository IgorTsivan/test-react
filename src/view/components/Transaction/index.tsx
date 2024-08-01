import { FC } from 'react';

import { Center } from '../Center';
import { Text } from '../Text';
import { ITransaction, TRANSACTION_STATUS } from '../../../init/models/transaction';

import './styles.scss';

interface TransactionProps {
    transaction: ITransaction
}

export const Transaction:FC<TransactionProps> = ({ transaction:{ icon, date, status, id, amount, paymentMethod }}) => {
    const getStatusColor = (status: TRANSACTION_STATUS) => {
        switch (status) {
            case TRANSACTION_STATUS.PERFORMED:
                return '#386DF8';
            case TRANSACTION_STATUS.ACTIVE:
                return '#00BA61';
            case TRANSACTION_STATUS.PROCESSING:
                return '#E5AA11';
            case TRANSACTION_STATUS.FAILED:
                return '#F9484B';
            default:
                return '#E5AA11';
        }
    };

    return (
        <div className = 'transaction'>
            <div className = 'transaction_mobile'>
                <Center>
                    <div className = 'transaction_header'>
                        <img
                            alt = 'icon'
                            src = { icon }
                        />
                        <div className = 'transaction_header-status'>
                            <Text
                                color = { getStatusColor(status) }
                                type = 'title-h2'>{status}</Text>
                            <Text type = 'text-body-light'>Operation Status</Text>
                        </div>
                    </div>
                </Center>
                <div className = 'transaction_slider'>
                    <div className = 'transaction_info'>
                        <div className = 'transaction_info-block'>
                            <Text type = 'title-h2'>{paymentMethod}</Text>
                            <Text type = 'text-body-light'>Withdraw</Text>
                        </div>
                        <div className = 'transaction_info-block'>
                            <Text type = 'title-h2'>{id}</Text>
                            <Text type = 'text-body-light'>Transactions Number</Text>
                        </div>
                        <div className = 'transaction_info-block'>
                            <Text type = 'title-h2'>{date}</Text>
                            <Text type = 'text-body-light'>Payment Date</Text>
                        </div>
                        <div className = 'transaction_info-block'>
                            <Text type = 'title-h2'>{amount}</Text>
                            <Text type = 'text-body-light'>Amount Payed</Text>
                        </div>
                    </div>
                </div>
            </div>
            <Center>
                <div className = 'transaction_web'>
                    <div className = 'transaction_info'>
                        <div className = 'transaction_info-method'>
                            <div className = 'transaction_icon'>
                                <img
                                    alt = 'icon'
                                    src = { icon }
                                />
                            </div>
                            <div className = 'transaction_info-block'>
                                <Text type = 'title-h2'>{paymentMethod}</Text>
                                <Text type = 'text-body-light'>Withdraw</Text>
                            </div>
                        </div>
                        <div className = 'transaction_info-block'>
                            <Text type = 'title-h2'>{id}</Text>
                            <Text type = 'text-body-light'>Transactions Number</Text>
                        </div>
                        <div className = 'transaction_info-block'>
                            <Text type = 'title-h2'>{date}</Text>
                            <Text type = 'text-body-light'>Payment Date</Text>
                        </div>
                        <div className = 'transaction_info-block'>
                            <Text type = 'title-h2'>{amount}</Text>
                            <Text type = 'text-body-light'>Amount Payed</Text>
                        </div>
                        <div className = 'transaction_info-block'>
                            <Text
                                color = { getStatusColor(status) }
                                type = 'title-h2'>{status}</Text>
                            <Text type = 'text-body-light'>Operation Status</Text>
                        </div>
                    </div>
                </div>
            </Center>
        </div>
    );
};
