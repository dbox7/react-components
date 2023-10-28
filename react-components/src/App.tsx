import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ErrorGeneric } from './components/ErrorGeneric/ErrorGeneric';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ErrorBoundary fallback="something was wrong">
      <ErrorGeneric />
      <Header />
    </ErrorBoundary>
  );
}

export default App;
