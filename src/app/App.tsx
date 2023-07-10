import React from 'react';
import clsx from "clsx";

import {useTheme} from "app/providers/theme";
import {AppRouter} from "app/providers/router";

import {Navbar} from "../widgets/Navbar";
import {Sidebar} from "../widgets/Sidebar";
import './styles/index.scss';

import { useTranslation } from "react-i18next";
import 'shared/config/i18n'



const App = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={clsx('app', [theme])}>
            <Navbar />
            <div className={'content-wrapper'}>
                <Sidebar />
                <div className={'content'}>
                    <h2>{t('test')}</h2>
                    <AppRouter />
                </div>
            </div>
        </div>
    );
};

export default App;
