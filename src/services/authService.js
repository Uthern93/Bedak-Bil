import api from './axios';

// Get CSRF Cookie before making any auth request
export const getCSRFToken = async () => {
    try {
        await api.get("/sanctum/csrf-cookie", { withCredentials: true });
        console.log("CSRF token fetched successfully!");
    } catch (error) {
        console.error("Failed to fetch CSRF token", error);
    }
};

// Register function
export const register = async (name, email, password) => {
    try {
        await getCSRFToken(); 
        const response = await api.post("/api/register", { name, email, password });

        sessionStorage.setItem("access_token", response.data.access_token);
        sessionStorage.setItem("refresh_token", response.data.refresh_token);
        sessionStorage.setItem("expires_at", response.data.expires_at);

        return response.data;
    } catch (error) {
        console.error("Error:", error.response.data.message || "An error occurred");
        throw error;
    }
};

// Login function
export const login = async (email, password) => {
    try {
        await getCSRFToken(); 
        const response = await api.post("/api/login", { email, password });

        sessionStorage.setItem("access_token", response.data.access_token);
        sessionStorage.setItem("refresh_token", response.data.refresh_token);
        sessionStorage.setItem("expires_at", response.data.expires_at);
        return response.data;

    } catch (error) {
        return { success: false, message: error.response.data.message || "Network error, please try again." };
    }
};

// Google Login Redirect
export const googleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
};

// Logout function (Removed CSRF request)
export const logout = async () => {
    try {
        await getCSRFToken();
        await api.post("/api/logout");
        window.location.href = "/auth/login";
    } catch (error) {
        console.error("Logout failed", error);
    }
    sessionStorage.removeItem("access_token");
};

// Fetch Authenticated User
export const getUser = async () => {
    return api.get("/api/user");
};
