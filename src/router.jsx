import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index';
import Main from './pages/Main';


const router = createBrowserRouter([
    {
        path : '/',
        element : <Index/>
    },
    {
      path : '/main-page',
      element : <Main/>
    },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}