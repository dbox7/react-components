import { Component, ReactNode, ChangeEvent } from 'react';

export class Header extends Component {
  state: Readonly<{ inputValue: string }> = {
    inputValue: '',
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = () => {
    this.setState({ inputValue: '' });
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
