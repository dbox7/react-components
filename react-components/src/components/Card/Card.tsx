import { Component } from 'react';

export interface CardProps {
  id: number;
  name: string;
  desc: string;
  imgURL: string;
}

export class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card">
        <img src={this.props.imgURL} alt="character image" />
        <span className="card__name">{this.props.name}</span>
        <p className="card__description">{this.props.desc}</p>
      </div>
    );
  }
}
