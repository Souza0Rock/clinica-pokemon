import axios from "axios";
import { localInstance } from "../connectApi";

const getScheduleTime = async () => {
  try {
    const { data } = await localInstance.get("scheduling/date");

    return data;
  } catch (error) {
    throw error;
  }
};

export default getScheduleTime
