import { localInstance } from "../connectApi";

const getScheduleDate = async () => {
  try {
    const { data } = await localInstance.get("scheduling/date");
    return data;
  } catch (error) {
    throw error;
  }
};

export default getScheduleDate
