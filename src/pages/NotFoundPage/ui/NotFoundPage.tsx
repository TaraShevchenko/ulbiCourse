import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('not_found_page')}
        </div>
    );
};

export default NotFoundPage;
