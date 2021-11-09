import React, { useContext, useState } from "react";
import ListItemContext from "../context/listItemContext";

import imgTitle from "../img/pokemon.png";

import "../App.css";

const ListPokemons = () => {
  const { listOfPokemons } = useContext(ListItemContext);

  return (
    <>
      <div className="title">
        <img src={imgTitle} alt="" />
      </div>
      <div className="search"></div>
      <div className="containerListPokemons">
        {listOfPokemons?.length > 0 &&
          listOfPokemons?.map((item, index) => {
            console.log(item, "hola 2");
            return (
              <div key={index} className="listOfPokemons">
                <span>{item?.name}</span>
                <img src={item?.sprites?.front_default} alt="" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListPokemons;
