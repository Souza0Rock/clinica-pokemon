import styled from "styled-components";
// import { weights, colors, sizes, rounds } from '@/utils/designTokens'

type SelectContainerProps = {
  disabled: boolean;
};

export const SelectContainer = styled.div<SelectContainerProps>`
  border: 1px solid #d5d5d5;
  border-radius: 0.5rem;
  font-size: 12px;
  height: 44px;
  box-sizing: border-box;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
`;

export const Select = styled.select`
  background: transparent;
  border: 0;
  appearance: none;
  color: #747474;
  width: 100%;
  padding: 13px 14px;

  &:focus {
    outline: 0;
  }
`;

export const Container = styled.div<{ width?: number; focus: boolean }>`
  width: ${({ width }) => (width ? `${width}%` : "auto")};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .icon-custom {
    color: #747474;
    font-size: 2rem;
    line-height: 38.73px;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    transform: rotate(90deg);
    position: absolute;
    top: 3px;
    right: 5px;
    z-index: -5;
  }

  &:focus {
    .icon-custom {
      rotate: (270deg);
    }
  }
`;

// export const Icon = styled.div`
//   color: #747474;
//   font-size: 2rem;
//   line-height: 38.73px;
//   font-weight: 300;
//   -webkit-font-smoothing: antialiased;
//   transform: rotate(90deg);
//   position: absolute;
//   top: 3px;
//   right: 5px;
//   z-index: -5;
// `;
