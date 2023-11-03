import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { FC } from 'react';

import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import RootLayout from './layouts/RootLayout/RootLayout';
import Details from './components/Details/Details';
import DataLayout from './layouts/DataLayout/DataLayout';

import './App.css';

const App: FC = () => {
  return (
    <ErrorBoundary fallback="something wrong">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="page/:page" element={<DataLayout />}>
              <Route path="details/:id" element={<Details />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
