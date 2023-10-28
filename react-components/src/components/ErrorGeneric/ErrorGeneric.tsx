import { Component, ReactNode } from 'react';

import './ErrorGeneric.css';

export class ErrorGeneric extends Component {
  state: Readonly<{ hasError: boolean }> = { hasError: false };

  render(): ReactNode {
    if (this.state.hasError) {
      throw new Error();
    } else {
      return (
        <button
          className="error-generic"
          onClick={() => this.setState({ hasError: true })}
        >
          Gen Error
        </button>
      );
    }
  }
}
