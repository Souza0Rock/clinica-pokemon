/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { localInstance } from "../connectApi";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await localInstance.get("/scheduling/time");

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro na solicitação à API:", error);
    res.status(500).json({ error: "Erro na solicitação à API" });
  }
};
