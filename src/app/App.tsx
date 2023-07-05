import React from 'react';
import clsx from "clsx";

import {useTheme} from "app/providers/theme";
import {AppRouter} from "app/providers/router";

import {Navbar} from "../widgets/Navbar";
import {Sidebar} from "../widgets/Sidebar";
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx('app', [theme])}>
            <Navbar />
            <div className={clsx('content')}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
