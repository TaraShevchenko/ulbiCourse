import React, { FC } from 'react';
import clsx from 'clsx';

import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';
import { AppRoutes, RoutePath } from 'shared/config/route';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={clsx(cls.Navbar, [className])}>
            <AppLink to={`/${RoutePath[AppRoutes.MAIN]}`} theme={EAppLinkTheme.INVERTED}>{t('menu.main')}</AppLink>
            <AppLink to={`/${RoutePath[AppRoutes.ABOUT]}`} theme={EAppLinkTheme.INVERTED}>{t('menu.about')}</AppLink>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    );
};

export default Navbar;
