import {FC} from 'react';
import cls from './AppLink.module.scss'
import {Link, LinkProps} from 'react-router-dom'
import clsx from 'clsx'

export enum AppLinkTheme {
    DEFAULT = 'default',
    INVERTED = 'inverted',
}
interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<IAppLinkProps> = ({theme = AppLinkTheme.DEFAULT, className, children, ...otherProps}) => {
    return (
        <Link className={clsx(cls.AppLink, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};

export default AppLink;