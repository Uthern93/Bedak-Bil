import {createBrowserRouter} from "react-router-dom";

// define route
import MainRoutes from "./MainRoutes";
import AuthRoutes from './AuthRoutes'

// combine all routes into a single router
const router = createBrowserRouter(
    [
        MainRoutes,
        AuthRoutes
    ],
    {
        basename: process.env.REACT_APP_BASE_NAME || '/',
    }
);

export default router;