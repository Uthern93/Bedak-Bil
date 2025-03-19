import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import AuthGuard from "../utils/route-guard/AuthGuard";

// Lazy load authentication pages
const Login = lazy(() => import("../views/authentication/login"));
const Register = lazy(() => import("../views/authentication/register"));
// const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));

const AuthRoutes = {
    path: "/auth",
    element: <AuthGuard />,
    children: [
        { 
            path: "login", 
            element: <Login /> 
        },
        { 
            path: "register", 
            element: <Register /> 
        },
        // { 
        //     path: "/forgot-password", 
        //     element: <ForgotPassword />  
        // },
    ],
};

export default AuthRoutes;
