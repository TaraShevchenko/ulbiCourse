import { FC, useState } from 'react';
import clsx from 'clsx';
import SidebarSwitcher from 'widgets/ui/Sidebar/ui/SidebarSwitcher/SidebarSwitcher';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [isActive, setIsActive] = useState(false);
    const handleToggleSidebar = () => {
        setIsActive(!isActive);
    };
    return (
        <div className={clsx(cls.Sidebar, { [cls.active]: isActive }, [className])}>
            <SidebarSwitcher isActive={isActive} onClick={handleToggleSidebar} />
        </div>
    );
};

export default Sidebar;
