import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import RootLayout from "../layouts/RootLayout";
import Spinner from "../components/Spinner";

const Home = lazy(() => import('../pages/Home/Home'))

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
                path: '*',
                element: <h1 className="container py-5">404 - Page not found</h1>
            }
        ]
    }
]);

export default router

