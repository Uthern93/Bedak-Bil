// import package
import { lazy } from 'react';
import MainLayout from "../layout/MainLayout";
import Loadable from '../ui-component/Loadable';
import loadable from "../ui-component/Loadable";
import SplitBill from "../views/group/SplitTheBill";

// import page routing
const Dashboard = Loadable(lazy(() => import('../views/dashboard')));
const Transaction = Loadable(lazy(() => import('../views/transaction')));
const Group = loadable(lazy(() => import('../views/group')));
const Profile = Loadable(lazy(() => import('../views/profile')));
const GroupDetails = loadable(lazy(() => import('../views/group/GroupDetails')));

console.log("Setting up MainRoutes");

const MainRoutes = {
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element: <Dashboard/>
        },
        {
            path: '/transaction',
            element: <Transaction/>
        },
        {
            path: '/group',
            element: <Group/>
        },
        {
            path: '/group/:groupId',
            element: <GroupDetails />
        },
        {
            path: '/group/splitBill',
            element: <SplitBill />
        },

        {
            path: '/profile',
            element: <Profile/>
        },
    ]
};

console.log("MainRoutes set up");

export default MainRoutes;