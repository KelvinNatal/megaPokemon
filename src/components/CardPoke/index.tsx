import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { data } from "../../types/data";

type Props = {
  name: string;
};

const CardPoke = ({ name }: Props) => {
  const [poke, setPoke] = useState<data>();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
        setPoke(response.data);
    });
  }, [name]);

  return (
    <>
      <div className="Card row jusify-content-center">
        <div className="cardPokemon col-12 col-md-6 col-lg-3 mx-0 mb-4">
          <img
            src={poke?.sprites.front_shiny}
            className="pokeImg card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Nome: {poke?.name}</h5>
            <p className="card-card-text">Peso: {poke?.height}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPoke;
