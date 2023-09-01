import { FC } from 'react';
import clsx from 'clsx';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './ErrorBoundaryPage.module.scss';

export interface IErrorBoundaryPageProps {
    className?: string;
}

export const ErrorBoundaryPage: FC<IErrorBoundaryPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const handleReloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={clsx(cls.ErrorBoundaryPage, [className])}>
            <h1>{t('error_boundary_page_desc')}</h1>
            <Button onClick={handleReloadPage}>{t('reload_page')}</Button>
        </div>
    );
};
