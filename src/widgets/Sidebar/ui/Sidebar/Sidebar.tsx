import {FC} from "react";
import cls from "./Sidebar.module.scss";
import clsx from "clsx";

interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = ({className}) => {
    // const [isOpened, setIsOpened] = useState(false);
    return (
        <div className={clsx(cls.Sidebar, [className])}>

        </div>
    );
};

export default Sidebar;