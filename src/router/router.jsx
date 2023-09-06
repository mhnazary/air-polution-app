import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Navigation from '../page/Navagate';
import Details from '../page/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navigation>
        <App />
      </Navigation>
    ),
  },
  {
    path: '/Stats',
    element: (
      <Navigation>
        <Details />
      </Navigation>
    ),
  },
]);
export default router;
