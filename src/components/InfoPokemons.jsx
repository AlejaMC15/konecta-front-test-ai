import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

const InfoPokemons = () => {
  const location = useLocation();
  const { from } = location?.state;

  return (
    <>
      {from ? (
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
            <h5>
              Number: <span>{from.item?.id}</span>
            </h5>
            <h5>
              Height: <span>{from.item?.height / 10} m</span>
            </h5>
            <h5>
              weight: <span>{from.item?.weight / 10} kg</span>
            </h5>
            <h5>
              Type:{" "}
              <span>
                {from.item?.types.map((tipo, i) => tipo.type.name + " / ")}
              </span>
            </h5>
            <h5>
              Abilities:{" "}
              <span>
                {from.item?.abilities.map(
                  (ability, i) => ability.ability.name + " / "
                )}
              </span>
            </h5>
          </div>
          <hr />
          <div className="btn">
            <Link to={"/"}>
              <button type="button">Volver</button>
            </Link>
          </div>
        </div>
      ) : (
        "Loading Info..."
      )}
    </>
  );
};

export default InfoPokemons;
