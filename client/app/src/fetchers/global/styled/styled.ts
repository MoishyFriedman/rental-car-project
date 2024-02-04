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
  grow?: string;
  border?: string;
  radius?: string;
  background?: string;
}

interface TextType {
  size?: string;
  font?: string;
  margin?: string;
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
  borderHover?: string;
}

interface SelectType {
  width?: string;
  height?: string;
  font?: string;
  size?: string;
  padding?: string;
  radius?: string;
}

interface InputType {
  width?: string;
  size?: string;
  margin?: string;
}

interface FromType {
  grow?: string;
}

export const DivBox = styled.div<DivBoxType>`
  background-color: ${({ background }) => background || "unset"};
  display: ${({ display }) => display || "flex"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  text-align: center;
  align-items: ${({ align }) => align || "unset"};
  flex-direction: ${({ way }) => way || "row"};
  flex-wrap: ${({ wrap }) => wrap || "noWrap"};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  gap: ${({ gap }) => gap || "0px"};
  margin: ${({ margin }) => margin || "0"};
  justify-content: ${({ space }) => space || "unset"};
  min-height: ${({ min_height }) => min_height || "auto"};
  visibility: ${({ visibility }) => visibility};
  flex-grow: ${({ grow }) => grow || "unset"};
`;

export const FormStyle = styled.form<FromType>`
  flex-grow: ${({ grow }) => grow || "unset"};
`;

export const Text = styled.p<TextType>`
  text-align: center;
  color: black;
  font-size: ${({ size }) => size};
  font-family: ${({ font }) => font};
  margin: ${({ margin }) => margin || "1vh"};
`;

export const ButtonStyle = styled.button<ButtonType>`
  background-color: ${({ background }) => background || "white"};
  color: ${({ color }) => color || "black"};
  border: ${({ border }) => border || "black solid 1px"};
  border-radius: ${({ radius }) => radius || "10px"};
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding || "6px"};
  margin: ${({ margin }) => margin || "1vh"};
  &:hover {
    background-color: ${({ backgroundHover }) => backgroundHover || "#d7d3d3b8"};
    border: ${({ borderHover }) => borderHover || "black solid 2px"};
    cursor: pointer;
  }
`;

export const SelectStyle = styled.select<SelectType>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  text-align: center;
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  border-radius: ${({ radius }) => radius || "10px"};
`;

export const InputStyle = styled.input<InputType>`
  width: ${({ width }) => width || "50vh"};
  font-size: ${({ size }) => size || "x-large"};
  margin: ${({ margin }) => margin || "1vh"};
  border-radius: 5px;
  border: solid 1px #8a978a;
  &::placeholder {
    color: #0f100f57;
  }
`;
