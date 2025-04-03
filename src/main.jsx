import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shipment from './Pages/shipment.jsx'
import Users from './Pages/User.jsx'
import Dashboard from './components/admin/Dashboard.jsx'
import HomePage from './Pages/HomePage.jsx'
import UserTracking from './Pages/UserTracking.jsx'
import Overview from "./Pages/overview.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path : '/',
        element: <HomePage /> 
      },
      {
        path: "/tracking",
        element : <UserTracking />
      },
      {
        path: "/AdminDashboard",
        element : <Dashboard />,
        children : [
          {
            path : "overview",
            element : <Overview />
          },
          {
            path : "shipment",
            element : <Shipment />
          },
          {
            path : "users",
            element : <Users />
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
