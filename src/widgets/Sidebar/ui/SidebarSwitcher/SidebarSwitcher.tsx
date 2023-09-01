/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import clsx from 'clsx';
import { Button, IButtonProps } from 'shared/ui/Button';
import BurgerIcon from 'shared/assets/icons/burger.svg';
import CloseIcon from 'shared/assets/icons/close.svg';
import cls from './SidebarSwitcher.module.scss';

interface ISidebarSwitcherProps extends IButtonProps {
    onClick: () => void;
    isActive: boolean;
}

const SidebarSwitcher: FC<ISidebarSwitcherProps> = ({ isActive, onClick, ...otherProps }) => (
    <Button className={clsx(cls.SidebarSwitcher)} onClick={onClick} {...otherProps}>
        {isActive ? <CloseIcon /> : <BurgerIcon />}
    </Button>
);

export default SidebarSwitcher;
