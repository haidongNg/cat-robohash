import CardItem from '../card-item/card-item';
import './card-list.style.scss';
const CardList = props => {
  return (
    <div className="card-list">
      {props.cats.map(cat => (
        <CardItem key={cat.id} cat={cat}/>
      ))}
    </div>
  );
};

export default CardList;
