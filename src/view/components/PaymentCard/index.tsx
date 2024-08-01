import { FC, useState } from 'react';

import cx from 'classnames';

import { Modal } from '../Modal';
import { Text } from '../Text';
import { IPaymentMethods, PAYMENT_LABEL } from '../../../init/models/payment';

import { DepositModal } from './modals/DepositModal';
import './styles.scss';

export const PaymentCard: FC<Omit<IPaymentMethods, 'type'>> = ({ label, text, logo, title, ...props }) => {
    const [ showModal, setShowModal ] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <div
                className = { cx('paymentCard', label && 'withLabel') }
                onClick = { openModal }>
                {
                    label && (
                        <div className = { cx('paymentCard_label', label === PAYMENT_LABEL.TRUSTED ? 'red' : 'blue') }>
                            <Text
                                className = 'paymentCard_label-text'
                                type = 'title-h2'>{label}</Text>
                        </div>
                    )
                }
                <img
                    alt = 'logo'
                    src = { logo } />
                <Text
                    className = 'paymentCard_title'
                    type = 'title-h2'>{title}</Text>
                <Text
                    className = 'paymentCard_text'
                    type = 'text-body-light'>{text}</Text>
            </div>
            <Modal
                isOpen = { showModal }
                onClose = { () => setShowModal(false) }>
                <DepositModal
                    paymentMethod = {{ label, text, logo, title, ...props }}
                    onClose = { () => setShowModal(false) } />
            </Modal>
        </>
    );
};
