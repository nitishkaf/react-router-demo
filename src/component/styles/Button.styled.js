import styled from "styled-components";

export const Button = styled.button`
  color: ${({ variant }) => variant};
  background-color: ${({ bgcolor }) => bgcolor};
  padding: 12px;
  border-radius: 10px;

  &:hover {
    background-color: aquamarine;
  }
`;

export const Header = styled.header`
  background-color: aliceblue;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: lightblue;
`;
