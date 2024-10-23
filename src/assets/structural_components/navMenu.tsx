// React
import { HashLink as Link } from 'react-router-hash-link';

//components
import { rollInOutAnimation } from '../hooks/animations';

//functions


// interface
interface NavMenuProps {
    isVisible: boolean | null;
    duration: number;
  }

const NavMenu = ({isVisible, duration}: NavMenuProps) => {
    const menuAnimation = rollInOutAnimation(isVisible);

    const idList = ['Home', 'About', 'Projects', 'Contact']

    return (
        <menu className={`absolute top-full m-2 p-4 rounded-xl w-fit h-fit bg-slate-400 transform origin-top-left duration-${duration} ${menuAnimation}`} 
            style={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? 'auto' : 'none' }}>
            <ul className="relative">
                { idList.map((value: string, index: number) => (
                    <li key={index}  
                        className="cursor-pointer p-1">
                            <Link smooth to={`/#${value}`}>{value}</Link>
                    </li>
                ))}
            </ul>
        </menu>
    )
};

export default NavMenu