import './App.css';
import ControlledForm from './components/ControlledForm/ControlledForm';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <ErrorBoundary fallback="Something gone wrong">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ControlledForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
