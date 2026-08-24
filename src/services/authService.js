import api from './api';

export const login = async (loginData) => {
    const response = await api.post('/auth/login', loginData);

    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }

    return response.data;
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const getCurrentUser = async () => {
    const response = await api.get('/auth/me');
    return response.data;
}

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
}

