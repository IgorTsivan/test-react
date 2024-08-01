import { useContext } from 'react';

import cx from 'classnames';

import logo from '../../../assets/images/logo.svg';
import close from '../../../assets/images/close.svg';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import { Center } from '../Center';
import SidebarContext from '../../../init/context/sidebarContext';

import './styles.scss';

const menuItems = [ 'Casino Games', 'Live Games', 'TV-Bet', 'Sport Games', 'Virtual', 'Tournaments', 'Spin Shop', 'FAQ', 'Support Chat' ];

export const Sidebar = () => {
    const { isShow, onClose } = useContext(SidebarContext);

    return (
        <div className = { cx('sidebar', isShow && 'show') }>
            <Center>
                <div className = 'sidebar_header'>
                    <img
                        alt = 'logo'
                        src = { logo } />
                    <IconButton onClick = { onClose }>
                        <img
                            alt = 'close'
                            src = { close }
                        />
                    </IconButton>
                </div>
                <div className = 'sidebar_items'>
                    {
                        menuItems.map((item) => {
                            return (
                                <Text
                                    key = { item }
                                    type = 'title-h2'>
                                    {item}
                                </Text>
                            );
                        })
                    }

                </div>
            </Center>

        </div>
    );
};
