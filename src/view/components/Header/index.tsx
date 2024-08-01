import { useContext } from 'react';

import { IconButton } from '../IconButton';
import { Center } from '../Center';
import { Button } from '../Button';
import { Text } from '../Text';
import Menu from '../../../assets/images/menu.svg';
import Logo from '../../../assets/images/logo.svg';
import Chevron from '../../../assets/images/down_chevron.svg';
import Plus from '../../../assets/images/plus.svg';
import Search from '../../../assets/images/search.svg';
import Gift from '../../../assets/images/gift.svg';
import Bell from '../../../assets/images/bell.svg';
import Avatar from '../../../assets/images/avatar.svg';
import SidebarContext from '../../../init/context/sidebarContext';

import './styles.scss';

export const Header = () => {
    const { onShow } = useContext(SidebarContext);

    return (
        <div className = 'header'>
            <Center>
                <div className = 'header_container'>
                    <div className = 'header_container--logo'>
                        <IconButton onClick = { onShow }>
                            <img
                                alt = 'menu'
                                src = { Menu } />
                        </IconButton>
                        <img
                            alt = 'logo'
                            src = { Logo }
                            onClick = { onShow } />
                    </div>
                    <div className = 'header_container--buttons'>
                        <IconButton className = 'header_container--buttons-icon'>
                            <img
                                alt = 'search'
                                src = { Search } />
                        </IconButton>
                        <IconButton className = 'header_container--buttons-icon'>
                            <img
                                alt = 'gift'
                                src = { Gift } />
                        </IconButton>
                        <IconButton className = 'header_container--buttons-icon'>
                            <span className = 'header_container--buttons-icon-notification'></span>
                            <img
                                alt = 'bell'
                                src = { Bell } />
                        </IconButton>
                        <div className = 'header_container--buttons-group'>
                            <Button className = 'header_button'>
                                <Text
                                    isSpanElement
                                    className = 'header_button--amount'
                                    type = 'text-body'>125.02 $</Text>
                                <Text
                                    isSpanElement
                                    className = 'header_button--percent'
                                    type = 'text-body'>13%</Text>
                                <img
                                    alt = 'arr'
                                    src = { Chevron } />
                            </Button>
                            <IconButton className = 'header_plus-button' >
                                <img
                                    alt = 'plus'
                                    src = { Plus } />
                            </IconButton>
                        </div>
                        <img
                            alt = 'ava'
                            className = 'header_container--buttons-avatar'
                            src = { Avatar } />
                    </div>
                </div>
            </Center>
        </div>
    );
};
