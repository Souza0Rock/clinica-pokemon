import React from "react";
import * as S from "./styles";
import Input from "../../common/Input";
import Row from "../../common/Row";
import Select from "../../common/Select";
import { TSchedule, useForm } from "../../../contexts/form";

const FormUser: React.FC = () => {
  const { payloadSchedule, setPayloadSchedule } = useForm();

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
          data={[{ id: 1, name: "oi" }]}
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
