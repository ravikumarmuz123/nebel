import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);

    if (!user) return <Navigate to="/user/login" replace />;
    return children;
};

export default ProtectedRoute;
