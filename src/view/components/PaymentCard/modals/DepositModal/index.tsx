import { FC, useState } from 'react';

import { Center } from '../../../Center';
import { Text } from '../../../Text';
import { IconButton } from '../../../IconButton';
import Arrow from '../../../../../assets/images/down_chevron.svg';
import { Button } from '../../../Button';
import { Dropdown } from '../../../Dropdown';
import { PAYMENT_METHODS_MOCK } from '../../../../../mock/paymentMethods';
import { IPaymentMethods } from '../../../../../init/models/payment';
import { PromocodeBlock } from '../../../PromocodeBlock';

import './styles.scss';
import { AmountBlock } from './components/AmountBlock';

interface DepositModalProps {
    onClose: () => void;
    paymentMethod: Omit<IPaymentMethods, 'type'>;
}

export const DepositModal:FC<DepositModalProps> = ({ onClose, paymentMethod }) => {
    const [ selected, setSelected ] = useState(paymentMethod);

    const handleSelect = (payment: Omit<IPaymentMethods, 'type'>) => {
        setSelected(payment);
    };

    const renderUserOption = (payment: Omit<IPaymentMethods, 'type'>) => (
        <div className = 'depositModal_dropdown'>
            <img
                alt = 'logo'
                src = { payment.logo } />
            <div className = 'depositModal_dropdown-text'>
                <div className = 'depositModal_dropdown-title'>
                    <Text type = 'title-h2'>{payment.title}</Text>
                    <span className = 'depositModal_circle'></span>
                    <Text type = 'title-h2'>{payment.text}</Text>
                </div>
                <Text type = 'text-body-light'>Please notice that you will send money in the USD</Text>
            </div>
        </div>
    );

    return (
        <div className = 'depositModal'>
            <div className = 'depositModal_header'>
                <IconButton
                    className = 'depositModal_header-button'
                    onClick = { onClose }>
                    <img
                        alt = 'back'
                        src = { Arrow } />
                </IconButton>
                <Text type = 'text-body'>Back to Payment Methods</Text>
            </div>
            <div className = 'depositModal_block'>
                <Button className = 'depositModal_balance'>
                    <Text
                        className = 'depositModal_balance-text'
                        type = 'title-h2'>Current Balance:</Text>
                    <Text
                        className = 'depositModal_balance-amount'
                        type = 'title-h2'>$ 0.00</Text>
                </Button>
            </div>

            <Center>
                <Dropdown<Omit<IPaymentMethods, 'type'>>
                    options = { PAYMENT_METHODS_MOCK }
                    renderOption = { renderUserOption }
                    selected = { selected }
                    onSelect = { handleSelect } />
                <AmountBlock />
                <div className = 'depositModal_promocode'>
                    <PromocodeBlock isDeposit />
                </div>
                <Button className = 'depositModal_deposit_button'>
                    <Text type = 'title-h2'>Deposit</Text>
                </Button>
            </Center>
        </div>
    );
};
