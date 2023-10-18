import React from "react";
import * as S from "./styles";
import Typography from "../../common/Typography";
import { DESCRIPTION_MOCK } from "./mock";

type TDescription = { title: string; text: string };

const AboutUsDescription: React.FC = () => {
  return (
    <S.Container>
      <Typography fontSize={18} fontWeight={500}>
        {DESCRIPTION_MOCK.title}
      </Typography>
      {DESCRIPTION_MOCK.content.map((i: TDescription, index: number) => (
        <React.Fragment key={index}>
          <Typography fontSize={16} fontWeight={500}>{i.title}</Typography>
          <Typography fontSize={14} fontWeight={500}>{i.text}</Typography>
        </React.Fragment>
      ))}
    </S.Container>
  );
};

export default AboutUsDescription;
