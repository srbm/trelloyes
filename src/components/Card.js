import React from 'react';
import './Card.css';

function Card (props) {
  return (
    <div className="Card">
      <button type="button" onClick={() => props.delete(props.id)}>delete</button>
      
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default Card;