import { Component } from 'react';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ErrorGeneric } from './components/ErrorGeneric/ErrorGeneric';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { fetchCharacters } from './api';
import { ICharacter, IResponse, callback } from './types';

class App extends Component<object, { data: ICharacter[] }> {
  state = {
    data: [
      {
        id: 361,
        name: 'Toxic Rick',
        status: 'Dead',
        species: 'Humanoid',
        type: "Rick's Toxic Side",
        gender: 'Male',
        origin: {
          name: 'Alien Spa',
          url: 'https://rickandmortyapi.com/api/location/64',
        },
        location: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/27'],
        url: 'https://rickandmortyapi.com/api/character/361',
        created: '2018-01-10T18:20:41.703Z',
      },
    ],
  };

  componentDidMount(): void {
    console.log(localStorage.getItem('data'));
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
    console.log(this.state.data);
    return (
      <ErrorBoundary fallback="something was wrong">
        <ErrorGeneric />
        <Header callback={this.updateState.bind(this)} />
        <List queue={this.state.data} />
      </ErrorBoundary>
    );
  }
}

export default App;
