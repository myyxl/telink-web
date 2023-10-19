import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Dashboard} from "./pages/Dashboard";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {getStatus} from "./api/ServicesSerivce";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    }
])


root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
