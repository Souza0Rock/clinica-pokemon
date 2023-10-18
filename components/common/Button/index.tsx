import React from "react";
import * as S from "./styles";

export type TProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "default" | "outlined";
  fontSize?: number;
  fontWeight?: number;
  type?: "submit" | "button";
};

const Button: React.FC<TProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "default",
  fontSize = 14,
  fontWeight = 400,
  type = "button",
}) => {
  const renderingVariant = () => {
    if (variant === "outlined") {
      return (
        <S.ButtonOutlined
          onClick={onClick}
          disabled={disabled}
          fontSize={fontSize}
          fontWeight={fontWeight}
          type={type}
        >
          {label}
        </S.ButtonOutlined>
      );
    } else
      return (
        <S.ButtonDefault
          onClick={onClick}
          disabled={disabled}
          fontSize={fontSize}
          fontWeight={fontWeight}
          type={type}
        >
          {label}
        </S.ButtonDefault>
      );
  };

  return <>{renderingVariant()}</>;
};

export default Button;
