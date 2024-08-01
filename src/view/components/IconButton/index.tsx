import { FC, MouseEvent, ReactNode } from 'react';

import cx from 'classnames';

import './styles.scss';

interface IconButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: FC<IconButtonProps> = ({ children, onClick, className }) => {
    return (
        <button
            className = { cx('iconButton_wrapper', className) }
            onClick = { onClick }>
            {children}
        </button>
    );
};
