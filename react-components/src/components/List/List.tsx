import { Component } from 'react';
import { Card } from '../Card/Card';
import { ICharacter } from '../../types';

type ListProps<T> = {
  queue: T[];
};

export class List extends Component<ListProps<ICharacter>> {
  render() {
    console.log(this.props.queue);
    return (
      <div className="list">
        {this.props.queue.map((item) => (
          <Card
            key={`img-${item.id}`}
            id={item.id}
            name={item.name}
            desc={item.species}
            imgURL={item.image}
          />
        ))}
        ;
      </div>
    );
  }
}
