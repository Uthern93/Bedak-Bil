import { createContext, useState, useEffect, useContext } from "react";
import { getUser, login, logout, register } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch user details on initial load if token exists
    const fetchUser = async () => {
        try {
            const response = await getUser();
            return response
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    // Login function
    const loginUser = async (email, password) => {
        try {
            const response = await login(email, password);
            setUser(response);
            return response;
        } catch (error) {
            throw new Error("Invalid credentials");
        }
    };

    // Register function
    const registerUser = async (name, email, password) => {
        try {
            const response = await register(name, email, password);
            return response;
        } catch (error) {
            throw new Error("Registration failed");
        }
    };

    // Google Login function
    const googleLogin = () => {
        window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
    };

    // Logout function
    const logoutUser = async () => {
        try {
            const response = await logout();
            setUser(null);
            return response;
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, loginUser, registerUser, googleLogin, logoutUser, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
