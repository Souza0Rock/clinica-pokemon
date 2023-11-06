import { localInstance } from "../connectApi";

const getScheduleTime = async () => {
  try {
    const { data } = await localInstance.get("scheduling/time");
    return data;
  } catch (error) {
    throw error;
  }
};

export default getScheduleTime
