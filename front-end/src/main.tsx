import React from 'react'
import ReactDOM from 'react-dom/client'

//ROUTER
import { RouterProvider } from "react-router-dom"
import {router} from './router/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
