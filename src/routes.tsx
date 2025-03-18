import { createBrowserRouter } from 'react-router-dom'

import { Dasboard } from './pages/app/dashboard'
import { SingIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Dasboard /> },
  { path: '/sing-in', element: <SingIn /> },
])
