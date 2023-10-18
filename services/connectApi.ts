import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

type ConnectAPIProps = {
  url: string;
  config?: AxiosRequestConfig<any> | undefined;
  instance?: AxiosInstance;
  data?: any;
};

export const localInstance = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export const pokeInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const get = <T>({
  url,
  config,
  instance = localInstance,
}: ConnectAPIProps) => instance.get<T>(url, config);
