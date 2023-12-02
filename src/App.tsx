import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ErrorBoundary fallback="Something gone wrong">
      <Routes>
        <Route path="/" element={} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
