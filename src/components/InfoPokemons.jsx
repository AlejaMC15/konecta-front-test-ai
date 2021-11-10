import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

const InfoPokemons = () => {
  const location = useLocation();
  const { from } = location?.state;

  return (
    <>
      <div className="containerInfo">
        <h1>
          Characteristics of <span>{from.item?.name}</span>
        </h1>
        <hr />
        <div className="containerAppearence">
          <div className="appearence">
            <h4>Appearance</h4>
            <div>
              <img src={from.item?.sprites?.front_default} alt="front" />
              <img src={from.item?.sprites?.back_default} alt="back" />
            </div>
          </div>

          <div className="otherAppearence">
            <h4>Other appearances</h4>
            {from.item?.sprites.back_shiny == null ? (
              "No posee"
            ) : (
              <img
                className="img"
                src={from.item?.sprites.front_shiny}
                alt="pokemon?"
              />
            )}

            {from.item?.sprites.front_shiny == null ? (
              ""
            ) : (
              <img
                className="img"
                src={from.item?.sprites.back_shiny}
                alt="pokemon"
              />
            )}
          </div>
        </div>
        <hr />
        <div className="characteristics">
          <h5>Number: {from.item?.id}</h5>
          <h5>Height: {from.item?.height / 10} m</h5>
          <h5>weight: {from.item?.weight / 10} kg</h5>
          <h5>
            Type: {from.item?.types.map((tipo, i) => tipo.type.name + " / ")}
          </h5>
          <h5>
            Abilities:{" "}
            {from.item?.abilities.map(
              (ability, i) => ability.ability.name + " / "
            )}
          </h5>
        </div>
        <hr />
        <div className="btn">
          <Link to={"/"}>
            <button type="button">Volver</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfoPokemons;
