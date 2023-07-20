import { FC } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink';
import { AppRoutes, RoutePath } from 'shared/config/route';
import { ThemeSwitcher } from 'widgets/ui/ThemeSwitcher';
import LangSwitcher from 'widgets/ui/LangSwitcher/ui/LangSwitcher';

import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={clsx(cls.Navbar, [className])}>
            <AppLink to={RoutePath[AppRoutes.MAIN]} theme={EAppLinkTheme.INVERTED}>{t('menu.main')}</AppLink>
            <AppLink to={RoutePath[AppRoutes.ABOUT]} theme={EAppLinkTheme.INVERTED}>{t('menu.about')}</AppLink>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    );
};

export default Navbar;
