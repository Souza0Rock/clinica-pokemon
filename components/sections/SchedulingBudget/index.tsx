import React from "react";
import * as S from "./styles";
import Typography from "../../common/Typography";
import Row from "../../common/Row";
import { useForm } from "../../../contexts/form";
import Button from "../../common/Button";

const SchedulingBudget: React.FC = () => {
  const { payloadSchedule } = useForm();

  const subtotalCalculation = 70 * payloadSchedule.pokemons_with_name_lenght;

  // console.log(payloadSchedule, 'payloadSchedule.pokemons_with_name_lenght')

  return (
    <>
      <S.Container>
        <Row>
          <Typography color="#747474">
            Número de pokémons a serem atendidos:
          </Typography>
          <Typography color="#747474">
            0{payloadSchedule.team_pokemons_length}
          </Typography>
        </Row>
        <Row>
          <Typography color="#747474">
            Atendimento unitário por pokémon:
          </Typography>
          <Typography color="#747474">R$ 70,00</Typography>
        </Row>
        <Row>
          <Typography color="#747474">Subtotal:</Typography>
          <Typography color="#747474">R$ {subtotalCalculation},00</Typography>
        </Row>
        <Row>
          <Typography color="#747474">Taxa geracional*:</Typography>
          <Typography color="#747474">R$ 2,10</Typography>
        </Row>
        <Typography color="#747474" fontSize={8}>
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </Typography>
      </S.Container>
      <Row>
        <Typography color="#1d1d1d" fontSize={24} fontWeight={600}>
          Valor Total: R$ 72,10
        </Typography>
        <Button
          label="Concluir Agendamento"
          fontWeight={700}
          onClick={() => console.log("oi")}
        />
      </Row>
    </>
  );
};

export default SchedulingBudget;
