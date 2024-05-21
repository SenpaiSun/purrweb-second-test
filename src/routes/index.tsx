import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from '../components/layout'
import { SignIn, SignUp } from '../pages'
import AboutMe from '../pages/AboutMe/AboutMe'
import { MyProfile } from '../pages/MyProfile/MyProfile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/about-me' element={<AboutMe />} />
      <Route path='/' element={<MyProfile />} />
    </Route>
  ),
  {
    basename: '/',
  }
)

export default router
