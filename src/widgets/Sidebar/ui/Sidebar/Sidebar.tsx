import {FC, useState} from "react";
import cls from "./Sidebar.module.scss";
import clsx from "clsx";
import SidebarSwitcher from "widgets/Sidebar/ui/SidebarSwitcher/SidebarSwitcher";

interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = ({className}) => {
    const [isActive, setIsActive] = useState(false);
    const handleToggleSidebar = () => {
        setIsActive(!isActive);
    }
    return (
        <div className={clsx(cls.Sidebar, {[cls.active]: isActive}, [className])}>
            <SidebarSwitcher isActive={isActive} onClick={handleToggleSidebar} />
        </div>
    );
};

export default Sidebar;