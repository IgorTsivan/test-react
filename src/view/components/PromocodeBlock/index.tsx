import { FC, useState } from 'react';

import cx from 'classnames';

import { Text } from '../Text';
import { Button } from '../Button';
import { Input } from '../Input';
import CircleCheck from '../../../assets/images/check-circle.svg';

import './styles.scss';

interface PromocodeBlockProps {
    isDeposit?: boolean;
}

export const PromocodeBlock:FC<PromocodeBlockProps> = ({ isDeposit }) => {
    const [ promocode, setPromocode ] = useState('');

    const applyPromocode = () => {
        console.log('apply');
    };

    return (
        <div className = 'promocodeBlock'>
            {
                isDeposit ? (
                    <Text
                        className = 'promocodeBlock_title'
                        type = 'title-h2'>
                        Promo Code
                    </Text>
                ) : (
                    <>
                        <Text
                            className = 'promocodeBlock_title'
                            type = 'title-h2'>
                            Have a Promo Code?
                        </Text>
                        <Text
                            className = 'promocodeBlock_subtitle'
                            type = 'text-body'>
                            Enter promo code here. It will activate a special bonus!
                        </Text>
                    </>
                )
            }

            <Input
                className = { cx('promocodeBlock_input', isDeposit && 'deposit') }
                rightIcon = {
                    (
                        <img
                            alt = 'check'
                            src = { CircleCheck } />
                    )
                }
                value = { promocode }
                onChange = { (event) => setPromocode(event.target.value) }
            />
            <Button
                className = { cx('promocodeBlock_button', isDeposit && 'deposit') }
                disabled = { !promocode }
                onClick = { applyPromocode }>
                <Text type = 'title-h2'>
                    Apply
                </Text>
            </Button>
        </div>
    );
};
