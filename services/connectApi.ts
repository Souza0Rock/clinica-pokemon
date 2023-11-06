import axios from "axios";

export const localInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export const pokeApiInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
