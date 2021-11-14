import React, { useContext, useEffect, useState } from "react";
import ListItemContext from "../context/listItemContext";
import { Link } from "react-router-dom";

import imgTitle from "../img/pokemon.png";

import "../App.css";

const ListPokemons = () => {
  const { listItems, listOfPokemons,getListItems } = useContext(ListItemContext);

  const [searchPokemon, setSearchPokemon] = useState();
  const [search, setSearch] = useState("");

  const nextPage = () => {
    getListItems(listItems.next);
  }
  const previusPage = () => {
    getListItems(listItems.previous);
  }

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
        {searchPokemon?.map((item, index) => {
          return (
            <>
              <div key={index} className="listOfPokemons">
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
      <button className="btn" onClick={previusPage} >Previous</button>
        <button className="btn" onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default ListPokemons;
