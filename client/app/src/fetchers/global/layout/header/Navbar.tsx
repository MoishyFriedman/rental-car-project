import { useNavigate } from "react-router";
import { MenuDiv, Navbar } from "./header.styled";
import { ButtonStyle } from "../../styled/styled";
import { useState } from "react";
import Menu from "./Menu";

export default function NavbarMenu() {
  const [menu, setMenu] = useState<string[]>([]);
  const navigate = useNavigate();

  return (
    <Navbar id="navbar">
      <ButtonStyle onMouseEnter={() => setMenu(["שירות לקוחות", "דיווח"])} font="Times New Roman" border="white" size="medium" background="#ffffff00">
        צור קשר
      </ButtonStyle>
      <ButtonStyle onMouseEnter={() => setMenu(["אודות", "הקהילה שלנו"])} font="Times New Roman" border="white" size="medium" background="#ffffff00">
        אודות
      </ButtonStyle>
      <ButtonStyle onMouseEnter={() => setMenu(["איתור רכב", "בחירת רכב"])} font="Times New Roman" border="white" size="medium" background="#ffffff00">
        השכרת רכב
      </ButtonStyle>
      <MenuDiv>
        <Menu menu={menu} />
      </MenuDiv>
    </Navbar>
  );
}
