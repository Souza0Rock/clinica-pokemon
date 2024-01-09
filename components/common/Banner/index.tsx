import React from "react";
import * as S from "./styles";
import Typography from "../Typography";
import { useRouter } from "next/router";

const Banner: React.FC = () => {
  const { route } = useRouter();

  const validateRoute = () => {
    if (route === "/quem-somos")
      return {
        crumb: "Quem Somos",
        complementText: "A maior rede de tratamento pokémon.",
      };
    else
      return {
        crumb: "Agendar Consulta",
        complementText: "Recupere seus pokémons em 5 segundos",
      };
  };

  const { complementText, crumb } = validateRoute()

  return (
    <S.Container>
      <Typography color="#eee" fontSize={12}>
        Home <span>{">"}</span> {crumb}
      </Typography>
      <Typography color="#fff" fontSize={32} fontWeight={700}>
        {crumb}
      </Typography>
      <Typography color="#eee">{complementText}</Typography>
    </S.Container>
  );
};

export default Banner;
