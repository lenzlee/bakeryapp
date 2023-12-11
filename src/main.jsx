import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import Hours from './components/Hours.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      },
      {
        path: '/Hours',
        element: <Hours />
      },
      {
        path: '/Cart',
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)