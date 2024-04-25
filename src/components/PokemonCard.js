import React, { useEffect, useContext } from "react";
import { Card } from "antd";
import { MyContext } from "../context";
import PokemonDetail from "./PokemonDetail";

const { Meta } = Card;

const PokemonCard = () => {
  const { pokemonData, fetchData } = useContext(MyContext);

  useEffect(() => {
    fetchData();
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {pokemonData.map((item) => (
        <Card
          key={item.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="pokemon" src={item.image_url} />}
        >
          <Meta
            title={item.pokemon}
            description={`Type: ${item.type}`}
            style={{ marginBottom: "8px" }}
          />
          <PokemonDetail data={item} />
        </Card>
      ))}
    </div>
  );
};

export default PokemonCard;
