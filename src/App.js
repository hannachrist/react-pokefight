import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonListContainer from './containers/PokemonListContainer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <PokemonListContainer />
    </div>
  );
}

export default App;
