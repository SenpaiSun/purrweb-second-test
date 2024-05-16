import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import * as page from '../pages';
import { Layout } from '../components/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      
    </Route>
  ), {
    basename: '/',
  }
);

export default router