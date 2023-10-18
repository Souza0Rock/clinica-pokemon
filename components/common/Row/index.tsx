import React from "react";
import * as S from "./styles";

type TProps = {
  children: React.ReactNode;
};

const Row: React.FC<TProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Row;
