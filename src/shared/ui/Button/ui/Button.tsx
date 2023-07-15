/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import cls from './Button.module.scss';

export enum EThemeButton {
    CLEAR = 'clear',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: EThemeButton;
    className?: string;
}

const Button: FC<IButtonProps> = ({ className, theme = EThemeButton.CLEAR, ...otherProps }) => (
    <button type="button" className={clsx(cls.Button, [cls[theme], className])} {...otherProps} />
);

export default Button;
