import axios from 'axios';
import {isTokenExpired} from '../utils/authUtils'

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});

// Add an interceptor to include auth token in all requests
api.interceptors.request.use(async (config) => {
    let token = sessionStorage.getItem("access_token");

    // Check if token is expired
    if (isTokenExpired()) {
        console.log("Token expired. Trying to refresh...");
        
        const refreshToken = sessionStorage.getItem("refresh_token");

        if (refreshToken) {
            try {
                const response = await api.post("/api/refresh-token", {
                    refresh_token: refreshToken,
                });

                // Store new access token and update expiry time
                sessionStorage.setItem("access_token", response.data.access_token);
                sessionStorage.setItem("expires_at", Date.now() + 15 * 60 * 1000);

                token = response.data.access_token;
            } catch (error) {
                console.error("Refresh token expired. Logging out...");
                sessionStorage.clear();
            }
        }
    }

    // Attach token to headers if available
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// interceptor to handle each response
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            console.log("Unauthorized. Logging out...");
            sessionStorage.clear();
        }
        return Promise.reject(error);
    }
);

export default api;
