import React from "react";
import * as S from "./styles";
import { TStyles } from "./types";
import { useFormContext } from "react-hook-form";

type TProps = {
  label: String;
  placeholder: string;
  width?: number;
  name: string;
};

const Input: React.FC<TProps & TStyles> = ({
  label,
  placeholder,
  width,
  name = "",
}) => {
  const { register } = useFormContext();

  return (
    <S.Container width={width}>
      <S.Label>{label}</S.Label>
      <S.Input
        type="text"
        placeholder={placeholder}
        {...register(name)}
      />
    </S.Container>
  );
};

export default Input;
