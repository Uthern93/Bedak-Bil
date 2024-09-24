import {createBrowserRouter} from "react-router-dom";

// define route
import MainRoutes from "./MainRoutes";

console.log("Creating router");

// combine all routes into a single router
const router = createBrowserRouter(
    [
        MainRoutes
    ],
    {
        basename: process.env.REACT_APP_BASE_NAME || '/',
    }
);
console.log("Router created:", router);

export default router;