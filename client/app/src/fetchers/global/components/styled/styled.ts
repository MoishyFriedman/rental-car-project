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
  min_height?: string;
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
}

export const DivBox = styled.div<DivBoxType>`
  display: flex;
  width: ${({ width }) => width || "0"};
  height: ${({ height }) => height || "0"};
  text-align: center;
  align-items: ${({ align }) => align || "unset"};
  flex-direction: ${({ way }) => way || "row"};
  flex-direction: ${({ way }) => way || "row"};
  flex-wrap: ${({ wrap }) => wrap || "noWrap"};
  gap: ${({ gap }) => gap || "0"};
  margin: ${({ margin }) => margin || "0"};
  justify-content: ${({ space }) => space || "unset"};
  min-height: ${({ min_height }) => min_height || "auto"};
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
  border-radius: ${({ radius }) => radius || "0"};
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => size};
  &:hover {
    background-color: ${({ backgroundHover }) => backgroundHover || "white"};
  }
`;
