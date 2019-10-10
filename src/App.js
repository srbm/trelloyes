import React from 'react';
import './App.css';
import List from './components/List';

function App(props) {
  const lists = props.store.lists;
  const allCards = props.store.allCards
  const cardValues = Object.values(allCards);
  console.log(allCards);
  const cardsArr = lists.map(item => {
    item.cardIds.forEach(element => {
      console.log(element + '  -element');
      console.log(cardValues + '  -all cards');
      cardValues.find(value => value.id === element ? value : null)
      
    });
  })
  


  const listElements = lists.map((item, index) =>
    <List key={index} header={item.header} cards={cardsArr} />
  );
  console.log(listElements);
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
