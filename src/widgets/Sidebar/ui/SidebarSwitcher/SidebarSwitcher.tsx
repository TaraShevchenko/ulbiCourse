import {FC} from "react";
import cls from "./SidebarSwitcher.module.scss";
import clsx from "clsx";
import {Button, IButtonProps} from "shared/Button";
import BurgerIcon from "shared/assets/icons/burger.svg"
import CloseIcon from "shared/assets/icons/close.svg"

interface ISidebarSwitcherProps extends IButtonProps {
    onClick: () => void;
    isActive: boolean;
}

const SidebarSwitcher: FC<ISidebarSwitcherProps> = ({isActive, onClick, ...otherProps}) => {
    return (
        <Button className={clsx(cls.SidebarSwitcher)} onClick={onClick} {...otherProps}>
            {isActive ? <CloseIcon/> : <BurgerIcon/>}
        </Button>
    );
};

export default SidebarSwitcher;