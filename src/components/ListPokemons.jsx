import React, { useContext, useEffect, useState } from "react";
import ListItemContext from "../context/listItemContext";

import imgTitle from "../img/pokemon.png";

import "../App.css";

const ListPokemons = () => {
  const { listOfPokemons } = useContext(ListItemContext);

  const [searchPokemon, setSearchPokemon] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearchPokemon(
      listOfPokemons?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, listOfPokemons]);

  return (
    <>
      <div className="title">
        <img src={imgTitle} alt="" />
      </div>
      <div className="search">
        <input
          className="buscador"
          type="text"
          placeholder="Buscar  pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="containerListPokemons">
        {searchPokemon?.map((item) => {
          return (
            <>
              <div className="listOfPokemons">
                <span>{item?.name}</span>
                <img src={item?.sprites?.front_default} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ListPokemons;
