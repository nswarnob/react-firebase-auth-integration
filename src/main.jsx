import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Root from './Layouts/Root'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
         index:true,
         element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
   <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
