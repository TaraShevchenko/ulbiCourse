import clsx from 'clsx';

import { Button, IButtonProps } from 'shared/ui/Button';
import { FC, useEffect, useState } from 'react';
import cls from './ErrorBoundaryButton.module.scss';

export interface IErrorBoundaryButtonProps extends IButtonProps {}

export const ErrorBoundaryButton:FC<IErrorBoundaryButtonProps> = ({ className }) => {
    const [createError, setCreateError] = useState(false);

    const handleClick = () => {
        setCreateError(true);
    };

    useEffect(() => {
        if (createError) {
            throw new Error();
        }
    }, [createError]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button className={clsx(cls.ErrorBoundaryButton, [className])} onClick={handleClick}>
            Trow error
        </Button>
    );
};
