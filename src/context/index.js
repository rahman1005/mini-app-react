import React, { useState } from "react";
// import axios from "axios";

export const MyContext = React.createContext({});

export const MyContextProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);

  const dataDummy = [
    {
      id: 1,
      pokemon: "Bulbasaur",
      type: "Grass",
      abilities: ["Overgrow"],
      hitpoints: 45,
      evolutions: ["Ivysaur", "Venusaur"],
      location: "Kanto region, Route 2",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 2,
      pokemon: "Charmander",
      type: "Fire",
      abilities: ["Blaze"],
      hitpoints: 39,
      evolutions: ["Charmeleon", "Charizard"],
      location: "Kanto region, Route 24",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 3,
      pokemon: "Squirtle",
      type: "Water",
      abilities: ["Torrent"],
      hitpoints: 44,
      evolutions: ["Wartortle", "Blastoise"],
      location: "Kanto region, Route 25",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 4,
      pokemon: "Pikachu",
      type: "Electric",
      abilities: ["Static"],
      hitpoints: 35,
      evolutions: ["Raichu"],
      location: "Kanto region, Route 2",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
      id: 5,
      pokemon: "Gengar",
      type: "Ghost",
      abilities: ["Levitate"],
      hitpoints: 60,
      evolutions: ["Haunter", "Gengar"],
      location: "Kanto region, Pokémon Mansion",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    },
    {
      id: 6,
      pokemon: "Eevee",
      type: "Normal",
      abilities: ["Run Away", "Adaptability"],
      hitpoints: 55,
      evolutions: [
        "Vaporeon",
        "Jolteon",
        "Flareon",
        "Espeon",
        "Umbreon",
        "Leafeon",
        "Glaceon",
        "Sylveon",
      ],
      location: "Kanto region, Celadon City",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    },
    {
      id: 7,
      pokemon: "Snorlax",
      type: "Normal",
      abilities: ["Immunity", "Thick Fat"],
      hitpoints: 160,
      evolutions: [],
      location: "Kanto region, Cycling Road",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    },
    {
      id: 8,
      pokemon: "Lapras",
      type: "Water/Ice",
      abilities: ["Water Absorb", "Shell Armor"],
      hitpoints: 130,
      evolutions: [],
      location: "Kanto region, Silph Co.",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    },
    {
      id: 9,
      pokemon: "Mewtwo",
      type: "Psychic",
      abilities: ["Pressure"],
      hitpoints: 106,
      evolutions: [],
      location: "Kanto region, Cerulean Cave",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dummyapi.online/api/pokemon"
      );
      const data = await response?.json();
      //   const response = await axios.get(
      //     "https://pokeapi.co/api/v2/pokemon/ditto"
      //   );
      const tmpData = data.slice(0, 9);
      setPokemonData(tmpData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPokemonData(dataDummy);
    }
  };

  const global = {
    pokemonData,
    fetchData,
  };

  const provider = {
    ...global,
  };

  return (
    <MyContext.Provider value={provider}>
      {children}
    </MyContext.Provider>
  );
};
