import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import PortfolioForm from './components/PortfolioForm/PortfolioForm.jsx'
import DeploymentPage from './components/deployment/deploypage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/dataentry',
        element : <PortfolioForm/>
      },
      {
        path: '/deploy',
        element: <DeploymentPage />
      }
    ],
  },
])









createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
