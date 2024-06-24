import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import Home from './views/Home'
import GuestLayout from './components/GuestLayout'
import Login from './views/Login'
import Register from './views/Register'

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Home />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router
