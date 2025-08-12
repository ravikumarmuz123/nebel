import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [state, setState] = useState('login');
    return (
        <div className='page page-user-login py-4'>
            <div className="mx-auto my-5 bg-primary-subtle rounded shadow px-4 py-5" style={{ maxWidth: '400px' }}>
                <h3 className="text-center mb-4">{state === 'login' ? 'Login' : 'Register'}</h3>
                <form>
                    {
                        state === 'register' && <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name='name'
                                placeholder='Name'
                            />
                        </div>
                    }
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            name='email'
                            placeholder='Email'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">{state === 'login' ? 'Login' : 'Register'}</button>
                    {state === 'login' && <div className='text-center mt-3'>Don't have an account? <span className='fw-bold text-primary cursor-pointer' onClick={() => setState('register')}>Register</span></div>}
                    {state === 'register' && <div className='text-center mt-3'>Already have an account? <span className='fw-bold text-primary cursor-pointer' onClick={() => setState('login')}>Login</span></div>}
                </form>
            </div>
        </div>
    )
}

export default Login