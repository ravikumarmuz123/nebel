import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "./ProtectedRoutes";
import RootLayout from "../layouts/RootLayout";
import AdminLayout from "../layouts/AdminLayout";
import Spinner from "../components/Spinner";
import ErrorPage from "../pages/ErrorPage";

// Public Pages
const Home = lazy(() => import('../pages/Home/Home'))
const Search = lazy(() => import('../pages/Search/Search'))
const Login = lazy(() => import('../pages/Login/Login'))

// Protected Pages
const Profile = lazy(() => import('../pages/User/Profile'))

// Admin Pages
const AdminDashboard = lazy(() => import('../pages/Admin/Dashboard'))
const ProductCategories = lazy(() => import('../pages/Admin/Categories/ProductCategories'))
const AddCategory = lazy(() => import('../pages/Admin/Categories/AddCategory'))

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
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: lazyLoader(Home)
            },
            {
                path: 'search',
                element: lazyLoader(Search)
            },
            {
                path: 'login',
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
    {
        path: '/admin',
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: lazyLoader(AdminDashboard)
            },
            {
                path: 'categories',
                children: [
                    {
                        index: true,
                        element: lazyLoader(ProductCategories)
                    },
                    {
                        path: 'add',
                        element: lazyLoader(AddCategory)
                    }
                ]
            },
            {
                path: '*',
                element: <h1>404 - Page not found</h1>
            },            
        ]
    }
]);

export default router

