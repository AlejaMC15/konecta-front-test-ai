import React, { useEffect, useState } from 'react';
import './App.css';
import ListPokemons from './components/listPokemons/ListPokemons';

function App() {

  const [getPokemons, setGetPokemons] = useState({})

  useEffect(() => {
    const getDataApi = async () => {
      await fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
        .then((response) => response.json())
        .then((data) => setGetPokemons(data));
    }
    getDataApi();

  }, []);

  const [pokeData, guardarPokeData] = useState([]);
  const pokemonId = () => {
    getPokemons.results?.map((item) => {
      console.log(item.id, "hola")
      return item.id
    })
  }

  useEffect(() => {
    const getDataApi = async () => {
      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
        .then((response) => response.json())
        .then((data) => guardarPokeData(data))
    }
    getDataApi();
  }, []);

  console.log(pokeData, getPokemons, "hola 2")

  return (
    <div className="App">
      <ListPokemons getPokemons={getPokemons} />
    </div>
  );
}

export default App;
