/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';
import cls from './AppLink.module.scss';

export enum EAppLinkTheme {
    DEFAULT = 'default',
    INVERTED = 'inverted',
}
interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: EAppLinkTheme;
}

const AppLink: FC<IAppLinkProps> = ({
    theme = EAppLinkTheme.DEFAULT, className, children, ...otherProps
}) => (
    <Link className={clsx(cls.AppLink, [className, cls[theme]])} {...otherProps}>
        {children}
    </Link>
);

export default AppLink;
