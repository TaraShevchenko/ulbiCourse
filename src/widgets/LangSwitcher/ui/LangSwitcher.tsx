import { FC, useMemo, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';

import { ELanguages } from '../model/types';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
    className?: string;
}

const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    const [isOpened, setIsOpened] = useState(false);
    const handleToggleDropdown = () => {
        setIsOpened(!isOpened);
    };
    const handleChangeLang = (lang: ELanguages) => {
        i18n.changeLanguage(lang);
        setIsOpened(false);
    };

    const activeLangTranslation = useMemo(() => {
        switch (i18n.language) {
        case ELanguages.EN:
            return t('lang.en-US');
        case ELanguages.RU:
            return t('lang.ru');
        case ELanguages.UA:
            return t('lang.ua');
        default:
            return t('lang.en-US');
        }
    }, [i18n.language]);

    return (
        <div className={clsx(cls.LangSwitcher, [className])}>
            <Button className={cls.Button} onClick={handleToggleDropdown}>
                {activeLangTranslation}
            </Button>
            <div className={clsx(cls.Dropdown, { [cls.Active]: isOpened })}>
                {i18n.language !== ELanguages.EN && (
                    <Button
                        className={cls.DropdownItem}
                        onClick={() => handleChangeLang(ELanguages.EN)}
                    >
                        {t('lang.en-US')}
                    </Button>
                )}
                {i18n.language !== ELanguages.RU && (
                    <Button
                        className={cls.DropdownItem}
                        onClick={() => handleChangeLang(ELanguages.RU)}
                    >
                        {t('lang.ru')}
                    </Button>
                )}
                {i18n.language !== ELanguages.UA && (
                    <Button
                        className={cls.DropdownItem}
                        onClick={() => handleChangeLang(ELanguages.UA)}
                    >
                        {t('lang.ua')}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default LangSwitcher;
