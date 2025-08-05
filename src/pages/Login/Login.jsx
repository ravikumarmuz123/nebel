import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
const Login = () => {
    const navigate = useNavigate();
    const { user, login } = useAuth();

    useEffect(() => {
        if (user) {
            navigate('/user/profile');
        }
    }, [user, navigate]);

    const [loginCredentials, setLoginCredentials] = useState({})
    const handleInputChange = (e) => {
        setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='page page-login pt-4 pb-5'>
            <div className="container">
                <h1 className="text-center">Login</h1>
                <form id='userLogin' className="mt-5" style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <div className="mb-3">
                        <input
                            type="email"
                            name='email'
                            value={loginCredentials.email}
                            onChange={handleInputChange}
                            placeholder='Email'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            name='password'
                            value={loginCredentials.password}
                            onChange={handleInputChange}
                            placeholder='Password'
                            className='form-control'
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login