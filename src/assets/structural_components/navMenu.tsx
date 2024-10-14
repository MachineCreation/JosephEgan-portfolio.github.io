

//components
import routes, { RouteType } from '../../routes';
import { useNavigate } from "react-router-dom";
import { rollInOutAnimation } from '../hooks/animations';

//functions


// interface
interface NavMenuProps {
    isVisible: boolean | null;
    duration: number;
  }

const NavMenu = ({isVisible, duration}: NavMenuProps) => {
    const nav = useNavigate();
    const menuAnimation = rollInOutAnimation(isVisible);

    return (
        <menu className={`absolute top-full m-2 p-2 rounded-xl w-fit h-fit bg-slate-400 transform origin-top-left duration-${duration} ${menuAnimation}`} 
            style={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? 'auto' : 'none' }}>
            <ul className="relative">
                { routes.map((route: RouteType, index: number) => (
                    <li key={index} 
                        onClick={() => {nav(route.path)}} 
                        className="cursor-pointer">{route.name}
                    </li>
                ))}
            </ul>
        </menu>
    )
};

export default NavMenu