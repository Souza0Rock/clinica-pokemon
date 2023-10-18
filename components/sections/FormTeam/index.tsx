import React from "react";
import * as S from "./styles";
import Row from "../../common/Row";
import Typography from "../../common/Typography";
import Select from "../../common/Select";
import Button from "../../common/Button";
import { TSchedule, useForm } from "../../../contexts/form";

const FormTeam: React.FC = () => {
  const { addPokemon, payloadSchedule, setPayloadSchedule } = useForm();

  return (
    <S.Container>
      <div className="box-title">
        <Typography color="#1D1D1D" fontSize={12} fontWeight={700}>
          Cadastre seu time
        </Typography>
        <Typography color="#747474" fontSize={12} fontWeight={500}>
          Atendemos até 6 pokemons por vez
        </Typography>
      </div>

      {payloadSchedule.team_pokemons.map(
        (i: { name: string }, index: number) => (
          <Row key={index}>
            <Typography color="#1D1D1D" fontSize={12} fontWeight={700}>
              Pokemon 0{index + 1}
            </Typography>
            <Select
              value={i.name}
              data={[{ id: 1, name: "oi" }]}
              placeholder="Selecione seu pokemon"
              onChange={(e) => {
                const updatedTeam = [...payloadSchedule.team_pokemons];
                payloadSchedule.team_pokemons[index].name = e.target.value;
                setPayloadSchedule((prev: TSchedule) => ({
                  ...prev,
                  team_pokemons: updatedTeam,
                  pokemons_with_name: updatedTeam,
                  pokemons_with_name_lenght: prev.pokemons_with_name_lenght + 1,
                }));
              }}
              width={82}
            />
          </Row>
        )
      )}

      <Button
        label="Adicionar novo pokémon ao time...+"
        onClick={addPokemon}
        variant="outlined"
        fontSize={12}
        fontWeight={700}
        disabled={payloadSchedule.team_pokemons_length === 6}
      />
    </S.Container>
  );
};

export default FormTeam;
