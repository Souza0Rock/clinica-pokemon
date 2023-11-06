import React from "react";
import * as S from "./styles";
import Typography from "../../common/Typography";
import FormUser from "../FormUser";
import FormTeam from "../FormTeam";
import FormSetDate from "../FormSetDate";
import Divider from "../../common/Divider";
import SchedulingBudget from "../SchedulingBudget";
import { FormProvider } from "../../../contexts/form";
import { IFormSchedule } from "./types";

const FormSchedule: React.FC<IFormSchedule> = ({
  scheduleTime,
  scheduleDate,
  scheduleRegion,
}) => {
  return (
    <S.Container>
      <Typography color="#1D1D1D" fontSize={24} fontWeight={600}>
        Preencha o formulário abaixo para agendar sua consulta
      </Typography>

      <FormProvider>
        <S.FormContainer>
          <FormUser scheduleRegion={scheduleRegion} />
          <FormTeam />
          <FormSetDate
            scheduleTime={scheduleTime}
            scheduleDate={scheduleDate}
          />
          <Divider />
          <SchedulingBudget />
        </S.FormContainer>
      </FormProvider>
    </S.Container>
  );
};

export default FormSchedule;
