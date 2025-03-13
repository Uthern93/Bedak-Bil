import { createContext, useState, useEffect } from "react";
import api from "../services/axios";
import { getUser, login, logout, register } from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch user details on initial load if token exists
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUser();
                setUser(response.data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    // Login function
    const loginUser = async (email, password) => {
        try {
            const response = await login(email, password);
            setUser(response); // Store user data in state
            return response;
        } catch (error) {
            throw new Error("Invalid credentials");
        }
    };

    // Register function
    const registerUser = async (name, email, password) => {
        try {
            await register(name, email, password);
            return loginUser(email, password);
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
            await logout();
            setUser(null);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, googleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
