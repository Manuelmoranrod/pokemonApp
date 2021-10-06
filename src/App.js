import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './styles/styles.scss'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { pokemonContext } from './context/pokemonContext'


function App() {

  const [pokemon, setPokemon] = useState([]);

  // Context siempre por dentro de BrowserRouter
  return (
    <div className="App">
      <BrowserRouter>
        <pokemonContext.Provider value={{ pokemon, setPokemon }}>
          <Header />
          <Main />
        </pokemonContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
