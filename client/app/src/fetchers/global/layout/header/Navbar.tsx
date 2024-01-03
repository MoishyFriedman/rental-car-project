import { useNavigate } from "react-router";
import { Navbar } from "./header.styled";
import { ButtonStyle } from "../../components/styled/styled";

export default function NavbarMenu() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <ButtonStyle font="Times New Roman" backgroundHover="grey" border="white" size="medium" radius="10px">
          צור קשר
        </ButtonStyle>
        <ButtonStyle font="Times New Roman" backgroundHover="grey" border="white" size="medium" radius="10px">
          אודות
        </ButtonStyle>
        <ButtonStyle font="Times New Roman" backgroundHover="grey" border="white" size="medium" radius="10px">
          השכרת רכב
        </ButtonStyle>
      </Navbar>
    </>
  );
}
