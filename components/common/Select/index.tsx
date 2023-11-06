import React, { useState } from "react";
import * as S from "./styles";
import { Label } from "../Input/styles";

interface IProps {
  data: any;
  label?: String;
  value?: string;
  disabled?: boolean;
  width?: number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder?: string;
};

const Select: React.FC<IProps> = ({
  data,
  label,
  value,
  disabled = false,
  width,
  onChange,
  placeholder = "Selecione",
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const handleFocus = () => setFocus(!focus);

  return (
    <S.Container
      width={width}
      focus={focus}
      onFocus={handleFocus}
      onBlur={handleFocus}
      onClick={handleFocus}
    >
      {label && <Label>{label}</Label>}
      <S.SelectContainer disabled={disabled}>
        <S.Select disabled={disabled} onChange={onChange} value={value}>
          <option>{placeholder}</option>
          {data.map((i: any, idx: number) => (
            <option key={idx}>{i.label || i.name || i }</option>
          ))}
        </S.Select>
        <div className="icon-custom">{">"}</div>
      </S.SelectContainer>
    </S.Container>
  );
};

export default Select;
