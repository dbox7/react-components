import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ErrorBoundary fallback="something was wrong">
      <Header />
    </ErrorBoundary>
  );
}

export default App;
