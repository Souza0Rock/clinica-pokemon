import React from "react";

import { Container } from "./styles";
import Typography from "../Typography";

const Footer: React.FC = () => {
  return (
    <Container>
      <Typography color="#fff">
        Todas as marcas e ilustrações utilizadas são de seus respectivos donos.
      </Typography>
    </Container>
  );
};

export default Footer;
