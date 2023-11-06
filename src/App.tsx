import { Component } from 'react';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ErrorGeneric } from './components/ErrorGeneric/ErrorGeneric';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { fetchCharacters } from './api';
import { ICharacter, IResponse, callback } from './types';

class App extends Component<object, { data: ICharacter[] }> {
  state = { data: [] };

  componentDidMount(): void {
    const tempData = localStorage.getItem('data');
    if (!tempData) {
      fetchCharacters().then((response: IResponse) =>
        this.setState({ data: response.results })
      );
    } else {
      this.setState({ data: JSON.parse(tempData) });
    }
  }

  updateState: callback<ICharacter[]> = (value) => {
    this.setState({ data: value });
  };

  render() {
    return (
      <ErrorBoundary fallback="something was wrong">
        <ErrorGeneric />
        <Header callback={this.updateState.bind(this)} />
        {this.state.data.length == 0 ? (
          <div className="not-found">Not found</div>
        ) : (
          <List queue={this.state.data} />
        )}
      </ErrorBoundary>
    );
  }
}

export default App;
