import React, { createContext, useContext, useState } from "react";

type IProviderProps = {
  children: React.ReactNode;
};

export type TSchedule = {
  name: string;
  surname: string;
  region: string;
  city: string;
  team_pokemons: { name: string }[];
  team_pokemons_length: number;
  pokemons_with_name: { name: string }[];
  pokemons_with_name_lenght: number;
};

interface IContextProps {
  payloadSchedule: TSchedule;
  setPayloadSchedule: any;
  addPokemon: () => void;
}

const FormContext = createContext({} as IContextProps);

export function FormProvider({ children }: IProviderProps) {
  const initialState = {
    name: "",
    surname: "",
    region: "",
    city: "",
    team_pokemons: [{ name: "" }],
    team_pokemons_length: 1,
    pokemons_with_name: [],
    pokemons_with_name_lenght: 0,
  };

  const [payloadSchedule, setPayloadSchedule] = useState(initialState);

  const addPokemon = () => {
    if (payloadSchedule.team_pokemons.length < 6) {
      setPayloadSchedule((prev: any) => ({
        ...prev,
        team_pokemons: [...prev.team_pokemons, { name: "" }],
        team_pokemons_length: prev.team_pokemons_length + 1,
      }));
    }
  };

  return (
    <FormContext.Provider
      value={{ payloadSchedule, setPayloadSchedule, addPokemon }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
