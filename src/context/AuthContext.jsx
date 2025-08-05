import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true);

    // Auto-login if token exists
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            api.get('/auth/me')
                .then(res => setUser(res.data))
                .catch(() => logout());
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const { data } = await api.post('/auth/login', { email, password });
        localStorage.setItem('accessToken', data.token);
        setUser(data.user);
        navigate('/dashboard');
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
