import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shipment from './Pages/shipment.jsx'
import Users from './Pages/User.jsx'
import Overview from './components/overview.jsx'
import Dashboard from './components/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path : '/',
        element: <Overview />
      },
      {
        path : '/shipment',
        element: <Shipment />
      },
      {
        path : '/users',
        element: <Users />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
