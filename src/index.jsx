import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './components/App.jsx'
import Main from "./components/Main"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {path: '/', element: <Navigate to='/main' />},
    {path: '/main', element: <Main />},
    {path: '/menu', element: <Menu />},
    {path: '/contact', element: <Contact />},
    {path: '*', element: <Error />},
  ]}
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
