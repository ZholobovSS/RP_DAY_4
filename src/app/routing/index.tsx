import { MainPage } from '@/pages/Main';
import { createBrowserRouter } from 'react-router';
import { App } from '@/app/App';
import { NotFoundPage } from '@/pages/NotFound';
import { FormikPage } from '@/pages/Formik';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'formik',
                element: <FormikPage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
