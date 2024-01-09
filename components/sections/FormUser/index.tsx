import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import Input from "../../common/Input";
import Row from "../../common/Row";
import Select from "../../common/Select";
// import { TSchedule, useForm } from "../../../contexts/form";
import getScheduleCitie from "../../../services/fetch/getScheduleCitie";
import { useFormContext } from "react-hook-form";

const FormUser: React.FC<any> = ({ scheduleRegion }) => {
  // const { payloadSchedule, setPayloadSchedule } = useForm();
  // const [cities, setCities] = useState();

  // const fetchCitie = useCallback(async () => {
  //   const response = await getScheduleCitie(payloadSchedule.region);

  //   setCities(response);
  // }, [payloadSchedule.region]);

  // useEffect(() => {
  //   payloadSchedule.region !== '' && getScheduleCitie("s");
  // }, [payloadSchedule.region]);

  const { watch, register } = useFormContext();

  return (
    <S.Container>
      <Row>
        <Input
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
          width={48}
        />
        <Input
          name="surname"
          label="Sobrenome"
          placeholder="Digite seu sobrenome"
          width={48}
        />
      </Row>
      <Row>
        <Select
          data={scheduleRegion.results}
          label={"Região"}
          placeholder="Selecione sua região"
          width={48}
          name="region"
        />
        <Select
          disabled
          data={[{ id: 1, name: "oi" }]}
          label={"Cidade"}
          placeholder="Selecione sua cidade"
          width={48}
          name="city"
        />
      </Row>
    </S.Container>
  );
};

export default FormUser;
