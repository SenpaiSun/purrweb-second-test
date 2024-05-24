import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '../components/layout';
import { MyProfile, SignIn, SignUp } from '../pages';
import AboutMe from '../pages/AboutMe/AboutMe';
import ProtectedRoute from '../hooks/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="/sign-in"
        element={<ProtectedRoute element={<SignIn />} path="/sign-in" />}
      />
      <Route
        path="/sign-up"
        element={<ProtectedRoute element={<SignUp />} path="/sign-up" />}
      />
      <Route
        path="/about-me"
        element={<ProtectedRoute element={<AboutMe />} path="/about-me" />}
      />
      <Route
        path="/"
        element={<ProtectedRoute element={<MyProfile />} path="/" />}
      />
    </Route>
  ),
  {
    basename: '/',
  }
);

export default router;