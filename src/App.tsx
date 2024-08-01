import React, { useState } from 'react';

import SidebarContext from './init/context/sidebarContext';
import { DepositPage } from './view/pages/Deposit';
import { Sidebar } from './view/components/Sidebar';

function App() {
    const [ isShow, setIsShow ] = useState(false);

    const onClose = () => {
        setIsShow(false);
    };

    const onShow = () => {
        setIsShow(true);
    };

    return (
        <div className = 'App'>
            <SidebarContext.Provider value = {{ onClose, isShow, onShow }}>
                <Sidebar />
                <DepositPage />
            </SidebarContext.Provider>
        </div>
    );
}

export default App;
