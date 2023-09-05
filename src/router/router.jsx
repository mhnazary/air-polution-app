import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Details from '../page/Detail';
import App from '../App';
import Navigation from '../page/Navagate';

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
