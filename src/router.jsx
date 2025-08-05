import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index';
import Main from './pages/Main';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Index/>
    },
    {
      path : '/main-page',
      element : <Main/>
    },
    {
      path : 'login',
      element : <Login/>
    },
    {
      path : 'sign-up',
      element : <SignUp/>
    }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}