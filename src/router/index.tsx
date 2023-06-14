/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-06-12 20:57:09
 * @LastEditTime: 2023-06-14 21:34:46
 */

import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layouts = lazy(() => import(`/@/layouts`));
const Home = lazy(() => import(`/@/views/Home`));
const About = lazy(() => import(`/@/views/About`));

const withLoadingComponent = (com: JSX.Element) => (
  <Suspense fallback={<div>loading...</div>}>{com}</Suspense>
);

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/',
    element: withLoadingComponent(<Layouts />),
    children: [
      {
        path: '/home',
        element: withLoadingComponent(<Home />)
      },
      {
        path: '/about',
        element: withLoadingComponent(<About />)
      }
    ]
  }
];

export default router;
