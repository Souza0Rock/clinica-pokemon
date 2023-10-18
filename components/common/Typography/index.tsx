import React from "react";
import { Text } from "./styles";
import { TStyles } from "./types";

type TProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Typography: React.FC<TProps & TStyles> = ({
  children,
  fontSize = 14,
  textAlign = "left",
  textTransform = "none",
  fontWeight = 400,
  color = "#000",
  ...rest
}) => {
  return (
    <Text
      fontSize={fontSize}
      textAlign={textAlign}
      textTransform={textTransform}
      fontWeight={fontWeight}
      color={color}
      cursorPointer={rest.onClick ? true : false}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
