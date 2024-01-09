import { pokeApiInstance } from "../connectApi";

const getScheduleCitie = async (citie: string) => {
  try {
    const { data } = await pokeApiInstance.get(`region/${citie}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getScheduleCitie
