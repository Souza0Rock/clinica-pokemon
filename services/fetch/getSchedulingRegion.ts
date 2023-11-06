import { pokeApiInstance } from "../connectApi";

const getScheduleRegion = async () => {
  try {
    const { data } = await pokeApiInstance.get("region");
    return data;
  } catch (error) {
    throw error;
  }
};

export default getScheduleRegion
