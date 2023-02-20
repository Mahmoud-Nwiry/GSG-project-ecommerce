import { lazy } from 'react';
import { Outlet } from 'react-router-dom';


const Login = lazy(()=> import('../pages/Login'))
const Signup = lazy(()=> import('../pages/Signup'))

export const authRouts = {
    path : '/auth',
    element : <Outlet />,
    children :[{
        path : 'login',
        element : <Login />,
    },
    {
        path : 'signup',
        element : <Signup />,
    }]
};
