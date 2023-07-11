import {ButtonHTMLAttributes, FC} from 'react'
import cls from './Button.module.scss'
import clsx from 'clsx'

export enum EThemeButton {
    CLEAR = 'clear',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: EThemeButton;
    className?: string;
}

const Button: FC<IButtonProps> = ({className, theme = EThemeButton.CLEAR, ...otherProps}) => (
    <button className={clsx(cls.Button, [cls[theme], className])} {...otherProps} />
);

export default Button;