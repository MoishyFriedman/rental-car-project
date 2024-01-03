import { useNavigate } from "react-router";
import { ButtonStyle, DivBox } from "../../components/styled/styled";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <DivBox width="100%" height="10vh">
        <DivBox way="column">
          <ButtonStyle>איתור רכב</ButtonStyle>
          <ButtonStyle>פרטי הרכבים</ButtonStyle>
          <ButtonStyle>ללללללל</ButtonStyle>
        </DivBox>
      </DivBox>
    </>
  );
}
