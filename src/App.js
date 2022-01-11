import React from 'react';
import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import data from './data.js';

function App() {
  return (
    <main className="App">

        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      <Cards
        cities={data}
      />
    </main>
  );
}

export default App;
