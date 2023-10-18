import React from "react";
import * as S from "./styles";
import Typography from "../../common/Typography";
import FormUser from "../FormUser";
import FormTeam from "../FormTeam";
import Divider from "../../common/Divider";
import SchedulingBudget from "../SchedulingBudget";
import Amount from "../Amount";
import { FormProvider } from "../../../contexts/form";

const FormSchedule: React.FC = () => {
  return (
    <S.Container>
      <Typography color="#1D1D1D" fontSize={24} fontWeight={600}>
        Preencha o formulário abaixo para agendar sua consulta
      </Typography>

      <FormProvider>
        <S.FormContainer>
          <FormUser />
          <FormTeam />
          <Divider />
          <SchedulingBudget />
          <Amount />
        </S.FormContainer>
      </FormProvider>
    </S.Container>
  );
};

export default FormSchedule;
