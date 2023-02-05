import MainLayout from '../layouts/MainLayout'
import Cart from '../pages/Cart';

import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductsDetails from '../pages/ProductsDetails';


import {authRouts} from './authRoutes'

export const routes = [
    {
      index : true,
      element : <MainLayout><Home /></MainLayout>
    },
    {
      path : '/products',
      element : <MainLayout />,
      children : [
        {
          index : true,
          element : <Products />
        },{
          path : ':id',
          element : <ProductsDetails />
        }
      ]
    },
    {
      path : '/cart',
      element : <Cart />
    },
    authRouts
];