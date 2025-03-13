// import package
import { lazy } from 'react';
import MainLayout from "../layout/MainLayout";
import Loadable from '../ui-component/Loadable';
import loadable from "../ui-component/Loadable";
import ProtectedRoute from './ProtectedRoutes';

// import page routing
const Dashboard = Loadable(lazy(() => import('../views/dashboard')));
const Transaction = Loadable(lazy(() => import('../views/transaction')));
const Group = loadable(lazy(() => import('../views/group')));
const Profile = Loadable(lazy(() => import('../views/profile')));
const GroupDetails = Loadable(lazy(() => import('../views/group/GroupDetails')));
const SplitBill = Loadable(lazy(() => import('../views/group/SplitTheBill')));


const MainRoutes = {
    path: '/',
    element: (
        <ProtectedRoute>
            <MainLayout/>
        </ProtectedRoute>
        
    ),
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

export default MainRoutes;