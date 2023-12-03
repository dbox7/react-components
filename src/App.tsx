import './App.css';
import ControlledForm from './components/ControlledForm/ControlledForm';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Main from './components/Main/Main';
import UncontrolledForm from './components/UnControlledForm/UnControlledForm';

function App() {
  return (
    <ErrorBoundary fallback="Something gone wrong">
      <Provider store={store}>
        <BrowserRouter>
          <Link to={'/controlled_form'}>Controlled form</Link>
          <Link to={'/uncontrolled_form'}>Uncontrolled form</Link>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/controlled_form" element={<ControlledForm />} />
            <Route path="/uncontrolled_form" element={<UncontrolledForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
