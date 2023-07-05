import React, {FC} from 'react'
import cls from './ThemeSwitcher.module.scss'
import clsx from 'clsx'
import {ETheme, useTheme} from "app/providers/theme";
import DarkModeIcon from "shared/assets/icons/dark-mode.svg"
import LightModeIcon from "shared/assets/icons/light-mode.svg"
import {Button, IButtonProps} from "shared/Button";

interface IThemeSwitcherProps extends IButtonProps {
    className?: string;
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button onClick={toggleTheme} className={clsx(cls.ThemeSwitcher, [className])}>
            {theme === ETheme.DARK ? <DarkModeIcon/> : <LightModeIcon/>}
        </Button>
    );
};

export default ThemeSwitcher;