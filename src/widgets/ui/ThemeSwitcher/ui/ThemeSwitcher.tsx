/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import clsx from 'clsx';
import { ETheme, useTheme } from 'app/providers/theme';
import DarkModeIcon from 'shared/assets/icons/dark-mode.svg';
import LightModeIcon from 'shared/assets/icons/light-mode.svg';
import { Button, IButtonProps } from 'shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps extends IButtonProps {}

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className, ...otherProps }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button className={clsx(cls.ThemeSwitcher)} onClick={toggleTheme} {...otherProps}>
            {theme === ETheme.DARK ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
