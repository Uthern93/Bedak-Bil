// import package
import { lazy } from 'react';
import MainLayout from "../layout/MainLayout";
import Loadable from '../ui-component/Loadable';

// import page routing
const Dashboard = Loadable(lazy(() => import('../views/dashboard')));

console.log("Setting up MainRoutes");

const MainRoutes = {
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element: <Dashboard/>
        },
    ]
};

console.log("MainRoutes set up");

export default MainRoutes;