// ErrorPage.jsx
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    console.error(error); // for debugging

    return (
        <div className='page page-error'>
            <div className="container my-5">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p className='text-danger'>
                    {error.statusText || error.message}
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
