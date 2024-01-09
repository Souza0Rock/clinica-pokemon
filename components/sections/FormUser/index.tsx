import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import Input from "../../common/Input";
import Row from "../../common/Row";
import Select from "../../common/Select";
import { TSchedule, useForm } from "../../../contexts/form";
import getScheduleCitie from "../../../services/fetch/getScheduleCitie";

const FormUser: React.FC<any> = ({ scheduleRegion }) => {
  const { payloadSchedule, setPayloadSchedule } = useForm();
  const [cities, setCities] = useState();

  const fetchCitie = useCallback(async () => {
    const response = await getScheduleCitie(payloadSchedule.region);

    setCities(response);
  }, [payloadSchedule.region]);

  useEffect(() => {
    payloadSchedule.region !== '' && getScheduleCitie("s");
  }, [payloadSchedule.region]);

  return (
    <S.Container>
      <Row>
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          value={payloadSchedule.name}
          width={48}
        />
        <Input
          label="Sobrenome"
          placeholder="Digite seu sobrenome"
          value={payloadSchedule.surname}
          width={48}
        />
      </Row>
      <Row>
        <Select
          data={scheduleRegion.results}
          label={"Região"}
          value={payloadSchedule.region}
          placeholder="Selecione sua região"
          width={48}
          onChange={(e) => {
            setPayloadSchedule((prev: TSchedule) => ({
              ...prev,
              region: e.target.value,
            }));
          }}
        />
        <Select
          disabled
          data={[{ id: 1, name: "oi" }]}
          label={"Cidade"}
          value={payloadSchedule.city}
          placeholder="Selecione sua cidade"
          width={48}
          onChange={(e) => {
            setPayloadSchedule((prev: TSchedule) => ({
              ...prev,
              city: e.target.value,
            }));
          }}
        />
      </Row>
    </S.Container>
  );
};

export default FormUser;
