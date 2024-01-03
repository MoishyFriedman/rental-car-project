import styled from "styled-components";

export const HeaderBox = styled.header`
  width: 100%;
  height: 7vh;
  background-color: #ffffffd6;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 5;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  align-items: center;
  /* &:hover {
    div {
      background-color: white;
      position: absolute;
      top: 0;
      display: block;
      color: black;
      width: 100%;
      height: 20vh;
      box-shadow: 2px 2px 2px gray;
    }
  } */
  p {
    margin: 2vh;
  }
`;

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
