

//components
import routes, { RouteType } from '../../routes';

//functions
import { useNav } from '../hooks/nav';

const NavMenu = () => {
    const nav = useNav();

    return (
        <menu className="absolute top-full m-2 p-2 rounded-xl w-fit h-fit bg-slate-400">
            <ul className="relative">
                { routes.map((route: RouteType, index: number) => (
                    <li key={index} onClick={nav(route.path)}>{route.name}</li>
                ))}
            </ul>
        </menu>
    )
};

export default NavMenu