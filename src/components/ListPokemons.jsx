import React, { useContext, useEffect, useState } from "react";
import ListItemContext from "../context/listItemContext";
import { Link } from "react-router-dom";

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
          className="search"
          type="text"
          placeholder="Write the name of the pokemon..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="containerListPokemons">
        {searchPokemon?.map((item) => {
          return (
            <>
              <div key={item.id} className="listOfPokemons">
                <span>{item?.name}</span>
                <img src={item?.sprites?.front_default} alt="" />
                  <Link to={"/info/" + item.id} state={{from: {item}}} >
                    <button> More information </button>
                  </Link>
              </div>
            </>
          );
        })}
      </div>
      <div className="paginator">
          <a href="...">Next</a>
          <a href="...">Previous</a>
        </div>
    </>
  );
};

export default ListPokemons;
