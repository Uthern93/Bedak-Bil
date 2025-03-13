import api from './axios'

// Get CSRF Cookie before making any auth request
export const getCsrfCookie = async () => {
    await api.get('/sanctum/csrf-cookie'); 
};

// Register function
export const register = async (name, email, password) => {
    try {
        await getCsrfCookie();
        const response = await api.post("/register", { name, email, password });
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Login function
export const login = async (email, password) => {
    try {
        await getCsrfCookie();
        const response = await api.post("/login", { email, password });
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const googleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
};

// Logout function
export const logout = async () => {
    try {
        await api.post("/logout");
    } catch (error) {
        console.error("Logout failed", error);
    }
    localStorage.removeItem("token");
};

// Fetch Authenticated User
export const getUser = async () => {
    return api.get("/api/user");
};
