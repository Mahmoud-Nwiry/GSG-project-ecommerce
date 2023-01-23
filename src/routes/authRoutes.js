import Login from '../pages/Login'
import Signup from '../pages/Signup';
import { Outlet } from 'react-router-dom';

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
