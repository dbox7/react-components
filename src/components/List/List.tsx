import Card from '../Card/Card';
import './List.css';

const List = ({ queue }: { queue: any[] }) => {
  return (
    <div className="list">
      {queue.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  );
};

export default List;
