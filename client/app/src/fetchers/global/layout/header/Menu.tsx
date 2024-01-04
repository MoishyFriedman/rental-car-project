import { useNavigate } from "react-router";
import { ButtonStyle, DivBox } from "../../styled/styled";

export default function Menu(prop: { menu: string[] }) {
  const navigate = useNavigate();

  return (
    <>
      <DivBox way="column" height="10vh">
        {prop.menu.map((menuItem) => (
          <ButtonStyle font="Times New Roman" border="white" size="medium" background="#ffffff00">
            {menuItem}
          </ButtonStyle>
        ))}
      </DivBox>
    </>
  );
}
