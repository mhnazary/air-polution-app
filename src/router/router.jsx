import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
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
]);

export default router;
