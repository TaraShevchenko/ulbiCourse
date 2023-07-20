import { FC } from 'react';
import clsx from 'clsx';
import cls from './Loader.module.scss';

interface ILoaderProps {
    className?: string;
}

const AppLink: FC<ILoaderProps> = ({ className }) => (
    <div className={clsx(cls.Loader, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default AppLink;
