import React, {FC} from 'react';
import clsx from 'clsx'

import {useTheme} from "app/providers/theme";
import {AppLink, AppLinkTheme} from 'shared/AppLink'

import cls from './Navbar.module.scss'

interface INavbarProps {
    className?: string;
}

const Navbar: FC<INavbarProps> = ({className}) => {
    const { toggleTheme } = useTheme();

    return (
        <div className={clsx(cls.Navbar, [className])}>
            <AppLink to={'/'} theme={AppLinkTheme.INVERTED}>Главная</AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.INVERTED}>О сайте</AppLink>

            <button className={clsx(cls.ThemeToggleButton)} onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default Navbar;