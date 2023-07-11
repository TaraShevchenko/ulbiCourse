import React, {FC} from 'react';
import clsx from 'clsx'

import {AppLink, EAppLinkTheme} from 'shared/ui/AppLink'

import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";

interface INavbarProps {
    className?: string;
}

const Navbar: FC<INavbarProps> = ({className}) => {
    const {t} = useTranslation()
    return (
        <div className={clsx(cls.Navbar, [className])}>
            <AppLink to={'/'} theme={EAppLinkTheme.INVERTED}>{t('menu.main')}</AppLink>
            <AppLink to={'/about'} theme={EAppLinkTheme.INVERTED}>{t('menu.about')}</AppLink>
            <ThemeSwitcher/>
            <LangSwitcher/>
        </div>
    );
};

export default Navbar;