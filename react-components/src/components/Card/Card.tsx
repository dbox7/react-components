import { Component } from 'react';
import './Card.css';

export interface CardProps {
  id: number;
  name: string;
  desc: string;
  origin: string;
  imgURL: string;
}

export class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.imgURL}
          alt="character image"
          className="card__img"
        />
        <div className="card__info">
          <div className="card__name">{this.props.name}</div>
          <div className="card__description">
            <b>Species:</b> {this.props.desc}
          </div>
          <div className="card__description">
            <b>Origin:</b> {this.props.origin}
          </div>
        </div>
      </div>
    );
  }
}
