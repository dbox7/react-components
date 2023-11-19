import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { FC } from 'react';
import { store } from './store/Store';

import { Provider } from 'react-redux';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import Details from './components/Details/Details';
import RootLayout from './layouts/RootLayout/RootLayout';
import NotFound from './components/404/404';

import './App.css';

const App: FC = () => {
  return (
    <ErrorBoundary fallback="something wrong">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="page/:page" element={<RootLayout />}>
              <Route path="details/:id" element={<Details />} />
            </Route>
            <Route path="/" element={<Navigate to="page/1" />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
