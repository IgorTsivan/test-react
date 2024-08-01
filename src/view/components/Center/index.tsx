import { FC, ReactNode } from 'react';

import './styles.scss';

interface CenterProps {
    children: ReactNode;
}

export const Center: FC<CenterProps> = ({ children }) => {
    return (
        <div className = 'center_wrapper'>
            {children}
        </div>
    );
};
