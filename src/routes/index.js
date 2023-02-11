import { lazy, Suspense } from 'react';
import { authRouts } from './authRoutes'


import MainLayout from '../layouts/MainLayout'



const Home = lazy(() => import('../pages/Home'))
const Products = lazy(() => import('../pages/Products'))
const ProductsDetails = lazy(() => import('../pages/ProductsDetails'))
const Cart = lazy(() => import('../pages/Cart'))

export const routes = [
  {
    index: true,
    element: <Suspense fallback="Loading...">
      <MainLayout>
        <Home />
      </MainLayout>
    </Suspense>
  },
  {
    path: '/products',
    element: <Suspense fallback="Loading...">
                <MainLayout />
            </Suspense>,
    children: [
      {
        index: true,
        element: <Suspense fallback="Loading...">
                  <Products />
                </Suspense>
      }, {
        path: ':id',
        element: <Suspense fallback="Loading...">
                  <ProductsDetails />
                  </Suspense>
      }
    ]
  },
  {
    path: '/cart',
    element: <Suspense fallback="Loading...">
              <Cart />
            </Suspense>
  },
  authRouts
];