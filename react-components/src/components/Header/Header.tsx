import { Component, ReactNode, ChangeEvent } from 'react';
import { fetchCharacters } from '../../api';
import { ICharacter, callback } from '../../types';
import logo from '../../assets/logo.png';
import './Header.css';

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
        <img src={logo} alt="logo" className="header__logo" />
        <span className="header__logo-decs">CHARACTERS</span>
        <div className="header__about">
          Find your favourite character from Rick and Morty&lsquo;s universe
        </div>
        <div className="header__search-wrap">
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
      </div>
    );
  }
}

// Header.contextType = items;
