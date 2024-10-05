import Dashboard from "./assets/pages/dashboard";
import Home from "./assets/pages/home";

export interface RouteType {
    path: string;
    component: React.ComponentType<any>;
    name: string;
}

const routes : RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home"
    },
    {
        path: "/Dashboard",
        component: Dashboard,
        name: "Dashboard"
    }
];

export default routes;