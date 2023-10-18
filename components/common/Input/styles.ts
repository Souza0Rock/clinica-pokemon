import styled from "styled-components";
import { TStyles } from "./types";

export const Container = styled.div<TStyles>`
  width: ${({ width }) => (width ? `${width}%` : "auto")};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  color: #1d1d1d;
`;

export const Input = styled.input`
  padding: 0.813rem 0.875rem;
  border: 1px solid #d5d5d5;
  border-radius: 0.5rem;
  font-size: 14px;
  color: #747474;
`;
