import React, { useContext, useEffect, useState } from "react";
import ListItemContext from "../context/listItemContext";
import { Link } from "react-router-dom";

import imgTitle from "../img/pokemon.png";

import "../App.css";

const ListPokemons = () => {
  const { listOfPokemons, pagination } = useContext(ListItemContext);

  const [searchPokemon, setSearchPokemon] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearchPokemon(
      listOfPokemons?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, listOfPokemons]);

const nextPage = () => {
  fetch(pagination.next)
  .then(response => response.json())
  .then(data => console.log(data));
}

console.log(pagination)
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
                {item?.sprites?.front_default ? (
                  <img src={item?.sprites?.front_default} alt="" />
                ) : (
                  "Loading image..."
                )}
                <Link to={"/info/" + item.id} state={{ from: { item } }}>
                  <button> More information </button>
                </Link>
              </div>
            </>
          );
        })
        }
      </div>
      <div className="paginator">
        <button className="btn" onClick={nextPage}>Next</button>
        <button className="btn" >Previous</button>
      </div>
    </>
  );
};

export default ListPokemons;
