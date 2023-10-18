import styled from "styled-components";
import Link from "next/link";

type TProps = {
  open: boolean;
};

export const Container = styled.div`
  height: 6.5rem;
  padding: 0 5.188rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div<TProps>`
  display: flex;
  background: #e40f0f;
  gap: 20px;
  padding: 14px 28px 14px 15px;
  align-items: center;
  border-radius: 50px;
  box-sizing: border-box;
  overflow: hidden;
  width: ${({ open }) => (open ? "259px" : "64px")};
  transition: 0.3s width;
  cursor: pointer;

  &:hover {
    width: 259px;
  }
`;

export const TextContent = styled.div`
  position: relative;
`;

export const Text = styled.div`
  position: absolute;
  top: -11px;
  left: 0;
  width: 165px;
  font-size: 20px;
  color: #fff;
`;

export const BoxNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;
`;

export const TextLink = styled(Link)`
  font-size: 14px;
`;
