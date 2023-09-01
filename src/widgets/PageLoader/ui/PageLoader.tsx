import { FC } from 'react';
import clsx from 'clsx';

import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

const PageLoader: FC<IPageLoaderProps> = ({ className }) => (
    <div className={clsx(cls.PageLoader, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
