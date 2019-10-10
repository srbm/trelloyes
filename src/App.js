import React from 'react';
import './App.css';
import List from './components/List';

function App(props) {
  const lists = props.store.lists;
  const allCards = props.store.allCards
  const cardValues = Object.values(allCards);
  
  function makeLists(list, index) {
    const cardsArr = cardValues.filter(obj => list.cardIds.includes(obj.id));
    return <List key={index} header={list.header} cards={cardsArr} />
  }

  const listElements = lists.map((item, index) => makeLists(item, index));
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listElements}
      </div>
    </main>
  );
}

export default App;
