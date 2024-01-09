import React from "react";
import * as S from "./styles";
import Row from "../../common/Row";
import Select from "../../common/Select";
// import { TSchedule, useForm } from "../../../contexts/form";

const FormSetDate: React.FC<any> = ({ scheduleTime, scheduleDate }) => {
  // const { payloadSchedule, setPayloadSchedule } = useForm();

  return (
    <S.Container>
      <Row>
        <Select
          data={scheduleTime}
          label="Horário de Atendimento"
          // value={payloadSchedule.region}
          placeholder="Selecione um horário"
          width={48}
          // onChange={(e) => {
          //   setPayloadSchedule((prev: TSchedule) => ({
          //     ...prev,
          //     region: e.target.value,
          //   }));
          // }}
        />
        <Select
          data={scheduleDate}
          label="Data para Atendimento"
          // value={payloadSchedule.city}
          placeholder="Selecione uma data"
          width={48}
          // onChange={(e) => {
          //   setPayloadSchedule((prev: TSchedule) => ({
          //     ...prev,
          //     city: e.target.value,
          //   }));
          // }}
        />
      </Row>
    </S.Container>
  );
};

export default FormSetDate;
