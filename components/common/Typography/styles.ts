import styled from "styled-components";
import { TStyles } from "./types";

export const Text = styled.p<TStyles>`
  font-size: ${({ fontSize }) => fontSize}px;
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  cursor: ${({ cursorPointer }) => (cursorPointer ? "pointer" : "auto")};
`;
