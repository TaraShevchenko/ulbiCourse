import React, {FC} from 'react';
import clsx from 'clsx'

import {AppLink, EAppLinkTheme} from 'shared/AppLink'

import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "shared/ThemeSwitcher";

interface INavbarProps {
    className?: string;
}

const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <div className={clsx(cls.Navbar, [className])}>
            <AppLink to={'/'} theme={EAppLinkTheme.INVERTED}>Главная</AppLink>
            <AppLink to={'/about'} theme={EAppLinkTheme.INVERTED}>О сайте</AppLink>

            <ThemeSwitcher />
        </div>
    );
};

export default Navbar;