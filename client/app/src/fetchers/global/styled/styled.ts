import styled from "styled-components";

interface DivBoxType {
  width?: string;
  height?: string;
  align?: string;
  way?: string;
  space?: string;
  wrap?: string;
  gap?: string;
  margin?: string;
  display?: string;
  min_height?: string;
  visibility?: string;
}

interface TextType {
  size: string;
  font?: string;
}

interface ButtonType {
  background?: string;
  backgroundHover?: string;
  color?: string;
  border?: string;
  radius?: string;
  font?: string;
  size?: string;
  padding?: string;
  margin?: string;
}

export const DivBox = styled.div<DivBoxType>`
  display: ${({ display }) => display || "flex"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  text-align: center;
  align-items: ${({ align }) => align || "unset"};
  flex-direction: ${({ way }) => way || "row"};
  flex-direction: ${({ way }) => way || "row"};
  flex-wrap: ${({ wrap }) => wrap || "noWrap"};
  gap: ${({ gap }) => gap || "0"};
  margin: ${({ margin }) => margin || "0"};
  justify-content: ${({ space }) => space || "unset"};
  min-height: ${({ min_height }) => min_height || "auto"};
  visibility: ${({ visibility }) => visibility};
`;

export const Text = styled.p<TextType>`
  text-align: center;
  font-size: ${({ size }) => size};
  font-family: ${({ font }) => font};
  margin: 1vh;
`;

export const ButtonStyle = styled.button<ButtonType>`
  background-color: ${({ background }) => background || "white"};
  color: ${({ color }) => color || "black"};
  border: ${({ border }) => border || "black"};
  border-radius: ${({ radius }) => radius || "10px"};
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding || "6px"};
  margin: ${({ margin }) => margin || "1vh"};
  &:hover {
    background-color: ${({ backgroundHover }) => backgroundHover || "#d7d3d3b8"};
    cursor: pointer;
  }
`;
