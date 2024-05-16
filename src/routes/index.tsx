import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import * as page from '../pages';
import { Layout } from '../components/layout';
import { AuthForm } from '../components/AuthForm';
import { formInputsAuth } from '../utils/constants';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/sign-in" element={<AuthForm formData={formInputsAuth} />} />
    </Route>
  ), {
    basename: '/',
  }
);

export default router