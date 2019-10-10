import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  console.log(props);
  const cardIds = props.cards.map((item, i) => 
    <Card key={i} title={item} content={item} />)
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cardIds}
      </div>
    </section>
  );
}

export default List;