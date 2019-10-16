import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  const cardIds = props.card.map((item, i) => 
    <Card 
      key={i} 
      id={item.id} 
      title={item.title} 
      content={item.content} 
      new={props.new} 
      delete={props.delete} 
    />)
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
        <button type="button" onClick={() => props.new(props.id)}>new</button>
      </header>
      <div className="List-cards">
        {cardIds}
      </div>
    </section>
  );
}

export default List;