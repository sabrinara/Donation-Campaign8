import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './pages/Statistics/Statistics';
import Root from './components/Root/Root';
import Donations from './pages/Donations/Donations';
import Donation from './components/Donation/Donation';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children :[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('./data.json'),
      },
      {
        path: "/donations",
        element : <Donations></Donations>,
      },
      {
        path: "/statistics",
        element : <Statistics></Statistics>,
      },
      {
        path: "/donation/:id",
        element: <Donation></Donation>,
        loader: () =>fetch('/data.json')

      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
