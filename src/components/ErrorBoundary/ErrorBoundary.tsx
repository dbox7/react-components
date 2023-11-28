import { ReactNode, Component } from 'react';

import errorImg from '../../../public/error.png';

import '@/components/ErrorBoundary/ErrorBoundary.module.css';
import Image from 'next/image';

export class ErrorBoundary extends Component<
  { fallback: string; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <Image
            src={errorImg}
            className="error-boundary__error-img"
            alt="error image"
            priority={true}
          />
          <div>{this.props.fallback}</div>
        </div>
      );
    }

    return this.props.children;
  }
}
