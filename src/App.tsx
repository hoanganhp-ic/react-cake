import HomePage from './pages/HomePage';
import './App.css';
import { createBrowserRouter, Outlet, RouteObject, RouterProvider, useNavigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import CreateCake from './pages/CreateCake';
import DetailCake from './pages/DetailCake';
import Login from './pages/auth/Login';
import Layout from './layouts/Layout';
import Profile from './pages/auth/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './pages/auth/Register';
import PrivateRoute from './route/PrivateRoute';
import { useEffect, ReactNode } from 'react';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'profile',
        element:(
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
          ),
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: '/cake',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'create',
        element: <CreateCake />
      },
      {
        path: ':id',
        element: <DetailCake />
      }
    ]
  }
];

const router = createBrowserRouter([
  {
    element: (
      <AuthWrapper>
        <Outlet />
      </AuthWrapper>
    ),
    children: appRoutes
  }
])

interface AuthWrapperProps {
  children: ReactNode;
}

function AuthWrapper({ children }: AuthWrapperProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      navigate('/cake');
    }
  }, [navigate]);

  return <>{children}</>;
}

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
