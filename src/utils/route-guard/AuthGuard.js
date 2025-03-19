import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
    const token = sessionStorage.getItem("access_token");

    return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default AuthGuard;
