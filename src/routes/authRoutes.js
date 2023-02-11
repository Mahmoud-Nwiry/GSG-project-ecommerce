import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';


const Login = lazy(()=> import('../pages/Login'))
const Signup = lazy(()=> import('../pages/Signup'))

export const authRouts = {
    path : '/auth',
    element : <Outlet />,
    children :[{
        path : 'login',
        element : <Suspense fallback="Loading..."><Login /></Suspense>,
    },
    {
        path : 'signup',
        element : <Suspense fallback="Loading..."><Signup /></Suspense>,
    }]
};
