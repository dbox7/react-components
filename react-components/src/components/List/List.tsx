import { Component } from 'react';
import { Card, CardProps } from '../Card/Card';

type ListProps<T> = {
  queue: T[];
};

export class List extends Component<ListProps<CardProps>> {
  render() {
    return (
      <div className="list">
        {this.props.queue.map((item) => (
          <Card
            key={`img-${item.id}`}
            id={item.id}
            name={item.name}
            desc={item.desc}
            imgURL={item.imgURL}
          />
        ))}
        ;
      </div>
    );
  }
}
