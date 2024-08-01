import React, { useState, useRef, useEffect, ReactNode } from 'react';

import { IconButton } from '../IconButton';
import Arrow from '../../../assets/images/down_chevron.svg';

import './styles.scss';

interface DropdownProps<T> {
    options: T[];
    onSelect: (option: T) => void;
    selected: T;
    renderOption: (option: T) => ReactNode;
}

export const Dropdown = <T, >({ options, onSelect, renderOption, selected }: DropdownProps<T>) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: T) => {
        onSelect(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className = 'dropdown'
            ref = { dropdownRef }
            onClick = { toggleDropdown }>
            <div >{renderOption(selected)}</div>
            <IconButton className = 'dropdown_arrow'>
                <img
                    alt = 'arr'
                    src = { Arrow } />
            </IconButton>
            <div className = { `dropdown_menu ${isOpen ? 'dropdown_menu-active' : ''}` }>
                {
                    options.map((option, index) => (
                        <div
                            className = 'dropdown_menu_item'
                            key = { index }
                            onClick = { () => handleSelect(option) }
                        >
                            {renderOption(option)}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
