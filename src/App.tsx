import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { FC } from 'react';

import ContextProvider from './components/ContextProvider/Context';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
// import Details from './components/Details/Details';
import RootLayout from './layouts/RootLayout/RootLayout';

import './App.css';

const App: FC = () => {
  return (
    <ErrorBoundary fallback="something wrong">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="page/:page" element={<RootLayout />}>
              {/* <Route path="details/:id" element={<Details />} /> */}
            </Route>
            <Route path="*" element={<Navigate to="page/1" />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
