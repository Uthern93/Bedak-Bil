import api from './axios'

export const register = (name, email, password) => {
    return api.post('/register', { name, email, password });
};

export const login = (email, password) => {
    return api.post('/login', { email, password });
};

export const googleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
};

export const logout = () => {
    return api.post('/logout');
};
