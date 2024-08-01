import { useState } from 'react';

import { Text } from '../../../../../Text';
import { Button } from '../../../../../Button';

import './styles.scss';

const addAmount = [ 10, 20, 30, 50, 100 ];

export const AmountBlock = () => {
    const [ defaultAmount, setDefaultAmount ] = useState(21);

    const increaseAmount = (amount: number) => {
        setDefaultAmount((prev) => prev + amount);
    };

    return (
        <div className = 'amountBlock'>
            <Text
                className = 'amountBlock_title'
                type = 'title-h2'>Amount</Text>
            <div className = 'amountBlock_amount'>
                <Text type = 'title-h2'>$ {defaultAmount}</Text>
            </div>
            <div className = 'amountBlock_buttons'>
                {
                    addAmount.map((item) => {
                        return (
                            <Button
                                key = { item }
                                onClick = { () => increaseAmount(item) }>
                                <Text
                                    className = 'amountBlock_buttons-text'
                                    type = 'title-h2'>+ ${item}</Text>
                            </Button>
                        );
                    })
                }
            </div>
            <Text
                className = 'amountBlock_text'
                type = 'text-body-light'>From {defaultAmount}.00 to 906.00 USD at a time</Text>
        </div>
    );
};
