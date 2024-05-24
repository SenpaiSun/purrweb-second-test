import { Navigate } from 'react-router-dom'
import { ReactElement } from 'react'

type ProtectedRouteProps = {
  element: ReactElement
  path?: string
}

const ProtectedRoute = ({ element: Element, path }: ProtectedRouteProps) => {
  console.log(path)
  const userId = localStorage.getItem('userId')

  if (!userId && path !== '/sign-in' && path !== '/sign-up' && path !== '/about-me') {
    return <Navigate to='/sign-in' />
  }

  if (userId && (path === '/sign-in' || path === '/sign-up' || path === '/about-me')) {
    return <Navigate to='/' />
  }

  return Element
}

export default ProtectedRoute
