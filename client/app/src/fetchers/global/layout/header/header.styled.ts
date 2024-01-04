import styled from "styled-components";
import { DivBox } from "../../styled/styled";

export const HeaderBox = styled.header`
  width: 100%;
  background-color: #ffffffd6;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;

export const MenuDiv = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffffd6;
  min-width: 100%;
  height: 10vh;
  z-index: 1;
  left: 0;
`;

export const Navbar = styled.div`
  justify-content: space-between;
  color: black;
  p {
    margin: 2vh;
  }
  &:hover ${MenuDiv} {
    display: block;
  }
`;

export const ButtonNavbar = styled(DivBox)``;

export const IconCar = styled.a`
  margin: 2vh;
  align-self: center;
  color: black;
`;

export const IconAccount = styled.div`
  margin: 2vh;
  align-self: center;
  color: black;
`;
