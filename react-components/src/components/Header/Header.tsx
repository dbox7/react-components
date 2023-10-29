import { Component, ReactNode, ChangeEvent } from 'react';
import { fetchCharacters } from '../../api';
import { ICharacter, callback } from '../../types';

export class Header extends Component<
  Readonly<{ callback: callback<ICharacter[]> }>,
  Readonly<{ inputValue: string }>
> {
  state = {
    inputValue: localStorage.getItem('search') || '',
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = () => {
    localStorage.setItem('search', this.state.inputValue);
    fetchCharacters(this.state.inputValue).then((res) => {
      this.props.callback(res.results);
    });
  };

  render(): ReactNode {
    return (
      <div className="header">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          className="header__input"
        />
        <button onClick={this.handleButtonClick} className="header__button">
          Search
        </button>
      </div>
    );
  }
}

// Header.contextType = items;
