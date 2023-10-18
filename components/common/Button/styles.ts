import styled from "styled-components";

type TProps = {
  fontSize: number;
  fontWeight: number;
};

export const ButtonDefault = styled.button<TProps>`
  width: fit-content;
  cursor: pointer;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 1.188rem;
  background-color: #e40f0f;
  color: #fff;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const ButtonOutlined = styled.button<TProps>`
  width: fit-content;
  cursor: pointer;
  border: 1px solid #1d1d1d;
  padding: 0.75rem 1.5rem;
  border-radius: 1.188rem;
  color: #1d1d1d;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: transparent;

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.5;
  }
`;
