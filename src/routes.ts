// React

// pages
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
    }
    // More routes later
];

export default routes;