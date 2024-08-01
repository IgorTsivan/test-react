import React, { FC, ReactNode, useEffect } from 'react';

import ReactDOM from 'react-dom';
import cx from 'classnames';

import { IconButton } from '../IconButton';
import CloseIcon from '../../../assets/images/modal_close.svg';

import './styles.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [ isOpen ]);

    if (!isOpen) {
        return null;
    }

    const modalContent = isOpen ? (
        <div className = 'modal'>
            <div className = { cx('modal_container', className) }>
                <IconButton
                    className = 'modal_close'
                    onClick = { onClose }>
                    <img
                        alt = 'close'
                        src = { CloseIcon } />
                </IconButton>
                {children}
            </div>
        </div>
    ) : null;

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById('portal-modal')!,
    );
};
