import { lazy } from 'react';
import { authRouts } from './authRoutes'


import MainLayout from '../layouts/MainLayout'



const Home = lazy(() => import('../pages/Home'))
const Products = lazy(() => import('../pages/Products'))
const ProductsDetails = lazy(() => import('../pages/ProductsDetails'))
const Cart = lazy(() => import('../pages/Cart'))

export const routes = [
  {
    index: true,
    element: <MainLayout>
        <Home />
      </MainLayout>
  },
  {
    path: '/products',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Products />
      }, {
        path: ':id',
        element: <ProductsDetails />
      }
    ]
  },
  {
    path: '/cart',
    element: <Cart />
  },
  authRouts
];