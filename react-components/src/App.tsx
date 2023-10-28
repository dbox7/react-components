import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary fallback="something was wrong">
      <div>Hello!</div>
    </ErrorBoundary>
  );
}

export default App;
