import React, { useContext } from "react";
import ListItemContext from "../context/listItemContext";

import imgTitle from "../img/pokemon.png";

import "../App.css";

const ListPokemons = () => {
  const { listItems, listOfPokemons } = useContext(ListItemContext);

  console.log(listItems, listOfPokemons, "hola");
  
  return (
    <>
      <div className="title">
        <img src={imgTitle} alt="" />
      </div>
      <div className="search"></div>

      {/* {getPokemons?.length > 0 && getPokemons?.map((item, index) => {
               
                console.log(item, "hola 2")
                return ( */}
      <div /* key={index} */ className="containerListPokemons">
        <div className="listOfPokemons">
          <span>Name: {/*  {getPokemons.name} */}</span>
          {/*  <img src={getPokemons.sprites.front_default} alt="" /> */}
        </div>
      </div>
      {/* )
            })} */}
    </>
  );
};

export default ListPokemons;
