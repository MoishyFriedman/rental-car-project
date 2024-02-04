import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 50vh;
  justify-content: space-between;
`;

export const CarImg = styled.img`
  display: block;
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-position: center;
  background-position: center;
  height: 100%;
  width: 50%;
  position: relative;
`;
