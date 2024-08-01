import { FC, useState } from 'react';

import { Center } from '../Center';
import { Button } from '../Button';
import { Text } from '../Text';
import { Transaction } from '../Transaction';
import { IconButton } from '../IconButton';
import filterIcon from '../../../assets/images/filter.svg';
import { ITransaction } from '../../../init/models/transaction';

import './styles.scss';

interface TransactionListProps {
    transactions: ITransaction[]
}

const initialLengthToShow = 3;

export const TransactionList:FC<TransactionListProps> = ({ transactions }) => {
    const [ lengthToShow, setLengthToShow ] = useState(initialLengthToShow);

    return (
        <div className = 'transactionList'>
            <Center>
                <div className = 'transactionList_header'>
                    <Text
                        className = 'transactionList_header-title-mob'
                        type = 'title-h2'>
                        Transactions
                    </Text>
                    <Text
                        className = 'transactionList_header-title-web'
                        type = 'title-h2'>
                        Last Transactions
                    </Text>
                    <IconButton className = 'transactionList_header-button'>
                        <img
                            alt = 'filter'
                            src = { filterIcon } />
                    </IconButton>
                </div>
            </Center>
            <div className = 'transactionList_list'>
                {
                    transactions.filter((_, index) => index < lengthToShow).map((trx) => {
                        return (
                            <Transaction
                                key = { trx.id }
                                transaction = { trx }
                            />
                        );
                    })
                }
            </div>
            {
                transactions.length > lengthToShow ? (
                    <Center>
                        <Button
                            className = 'transactionList_button'
                            onClick = { () => setLengthToShow((prev) => prev + initialLengthToShow) }>
                            <Text type = 'title-h2'>Show More</Text>
                        </Button>
                    </Center>
                ) : null
            }
        </div>
    );
};
