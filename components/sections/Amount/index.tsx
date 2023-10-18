import React from "react";
import Row from "../../common/Row";
import Typography from "../../common/Typography";
import Button from "../../common/Button";

const Amount: React.FC = () => {
  return (
    <Row>
      <Typography color="#1d1d1d" fontSize={24} fontWeight={600}>
        Valor Total: R$ 72,10
      </Typography>
      <Button
        label="Concluir Agendamento"
        fontWeight={700}
        onClick={() => console.log('oi')}
      />
    </Row>
  );
};

export default Amount;
