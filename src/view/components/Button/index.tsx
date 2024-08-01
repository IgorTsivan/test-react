import { FC, ReactNode, MouseEvent, CSSProperties } from 'react';

import cx from 'classnames';

import './styles.scss';

export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
    style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
    className,
    disabled,
    loading,
    onClick,
    children,
    style,
    ...props
}) => {
    return (
        <button
            className = { cx('button_wrapper', className) }
            disabled = { disabled || loading }
            style = { style }
            onClick = { onClick }
            { ...props }
        >
            {children}
        </button>
    );
};
