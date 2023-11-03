// import { useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
// import { getGifsByQuery } from './api';

import './App.css';
import {
  NavLink,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
// import Header from './components/Header/Header';
import RootLayout from './layouts/RootLayout';
import Details from './components/Details/Details';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/:id" element={<Details />} />
    </Route>
  )
);

const App = () => {
  return (
    <ErrorBoundary fallback="something wrong">
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
