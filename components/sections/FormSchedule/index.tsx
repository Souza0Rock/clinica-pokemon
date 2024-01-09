import React from "react";
import * as S from "./styles";
import Typography from "../../common/Typography";
import FormUser from "../FormUser";
import FormTeam from "../FormTeam";
import FormSetDate from "../FormSetDate";
import Divider from "../../common/Divider";
import SchedulingBudget from "../SchedulingBudget";
import { IFormSchedule } from "./types";

import { useForm, FormProvider } from "react-hook-form";

const FormSchedule: React.FC<IFormSchedule> = ({
  scheduleTime,
  scheduleDate,
  scheduleRegion,
}) => {
  const methods = useForm({
    defaultValues: {
      name: "",
      surname: "",
      region: "",
      city: "",
      team_pokemons: [],
      team_pokemons_length: 1,
      pokemons_with_name: [],
      pokemons_with_name_lenght: 0,
    },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  console.log(methods.watch(), "watch pai");

  return (
    <S.Container>
      <Typography color="#1D1D1D" fontSize={24} fontWeight={600}>
        Preencha o formulário abaixo para agendar sua consulta
      </Typography>

      <FormProvider {...methods}>
        <S.FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <FormUser scheduleRegion={scheduleRegion} />
          {/* <FormTeam />
          <FormSetDate
            scheduleTime={scheduleTime}
            scheduleDate={scheduleDate}
          /> */}
          <Divider />
          {/* <SchedulingBudget /> */}
        </S.FormContainer>
      </FormProvider>
    </S.Container>
  );
};

export default FormSchedule;
