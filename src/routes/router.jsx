import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "./ProtectedRoutes";
import RootLayout from "../layouts/RootLayout";
import Spinner from "../components/Spinner";

// Public Pages
const Home = lazy(() => import('../pages/Home/Home'))
const Search = lazy(() => import('../pages/Search/Search'))
const Login = lazy(() => import('../pages/Login/Login'))

// Protected Pages
const Profile = lazy(() => import('../pages/User/Profile'))

const lazyLoader = (Component) => {
    return (
        <Suspense fallback={<Spinner />}>
            <Component />
        </Suspense>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: lazyLoader(Home)
            },
            {
                path: '/search',
                element: lazyLoader(Search)
            },
            {
                path: '/login',
                element: lazyLoader(Login)
            },
            {
                path: '/user/profile',
                element: <ProtectedRoute>
                    {lazyLoader(Profile)}
                </ProtectedRoute>
            },
            {
                path: '*',
                element: <h1 className="container py-5">404 - Page not found</h1>
            }
        ]
    },
]);

export default router

