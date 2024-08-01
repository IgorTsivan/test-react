import { createContext } from 'react';

export interface ISidebarContext {
    isShow: boolean;
    onShow: () => void;
    onClose: () => void,
}

const SidebarContext = createContext<ISidebarContext>({
    isShow:  false,
    onShow:  () => false,
    onClose: () => false,
});

export default SidebarContext;
