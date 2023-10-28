import { ReactNode, Component } from 'react';

import errorImg from '../../assets/error.png';

import './ErrorBoundary.css';

export class ErrorBoundary extends Component<
  { fallback: string; children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: string; children: ReactNode }) {
    super(props);
    this.state = { hasError: true };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <img
            src={errorImg}
            className="error-boundary__error-img"
            alt="error image"
          />
          <div>{this.props.fallback}</div>
        </div>
      );
    }

    return this.props.children;
  }
}
