import { FC, HTMLProps, ElementType } from 'react';

import cx from 'classnames';

import './styles.scss';

export interface TextProps extends HTMLProps<HTMLParagraphElement | HTMLHeadingElement> {
    type:
    | 'title-h1'
    | 'title-h2'
    | 'text-body'
    | 'text-body-light'
    className?: string;
    color?: string;
    isSpanElement?: boolean;
}

const getClassNameByType = (type: TextProps['type']) => {
    switch (type) {
        case 'title-h1':
            return 'headline-h1';
        case 'title-h2':
            return 'headline-h2';
        case 'text-body':
            return 'text-body';
        case 'text-body-light':
            return 'text-body-light';
        default:
            return '';
    }
};

const getComponentByType = (type: TextProps['type'], isSpanElement?: boolean): ElementType => {
    if (isSpanElement) {
        return 'span';
    }

    switch (type) {
        case 'title-h1':
            return 'h1';
        case 'title-h2':
            return 'h2';
        default:
            return 'p';
    }
};

export const Text: FC<TextProps> = ({ type, className, children, color, isSpanElement, ...props }) => {
    const Component = getComponentByType(type, isSpanElement);

    return (
        <Component
            { ...(props) }
            className = { cx([ getClassNameByType(type) ], className) }
            style = {
                {
                    ...props.style,
                    color,
                }
            }>
            {children}
        </Component>
    );
};
