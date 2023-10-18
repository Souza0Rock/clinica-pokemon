import React from "react";
import * as S from "./styles";
import { TStyles } from "./types";

type TProps = {
  label: String;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  width?: number;
  value?: string
};

const Input: React.FC<TProps & TStyles> = ({
  label,
  onChange,
  placeholder,
  width,
  value,
}) => {
  return (
    <S.Container width={width}>
      <S.Label>{label}</S.Label>
      <S.Input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </S.Container>
  );
};

export default Input;
