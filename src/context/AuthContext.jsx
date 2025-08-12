// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, loginUser, registerUser, verifyCode } from '../api/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load user on mount if token exists
   

    return (
        <AuthContext.Provider value={{  }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
