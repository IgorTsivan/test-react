import { forwardRef, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

import cx from 'classnames';

import './styles.scss';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    children?: ReactNode;
    placeholder?: string;
    rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    placeholder,
    disabled,
    rightIcon,
    ...props
}, ref) => {
    return (
        <div className = { cx('input_wrapper', className) }>
            <input
                disabled = { disabled }
                { ...props }
                placeholder = { placeholder }
                ref = { ref }
            />
            {rightIcon && <span className = 'input_wrapper_right-icon'>{rightIcon}</span>}
        </div>
    );
});
