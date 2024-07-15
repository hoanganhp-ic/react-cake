import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import Footer from './layouts/Footer';
import './App.css';
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'create'
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
