import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// Lazy load authentication pages
const Login = lazy(() => import("../views/authentication/login"));
const Register = lazy(() => import("../views/authentication/register"));
// const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));

const AuthRoutes = {
    path: "/auth",
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
