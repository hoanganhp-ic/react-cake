import HomePage from './pages/HomePage';
import './App.css';
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import CreateCake from './pages/CreateCake';
import DetailCake from './pages/DetailCake';
import Login from './pages/auth/Login';
import Layout from './layouts/Layout';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    path: '/cake',
    element: <MainLayout />,
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
      <Outlet />
    ),
    children: appRoutes
  }
])

function App() {

  return <RouterProvider router={router}/>;
}

export default App;
