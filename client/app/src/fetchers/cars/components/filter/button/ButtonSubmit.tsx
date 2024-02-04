import { useNavigate } from "react-router";
import { ButtonStyle } from "../../../../global/styled/styled";

export default function ButtonSubmit(prop: { text: string; nav?: string }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (prop.nav) {
      navigate(prop.nav);
    }
  };
  return (
    <>
      <ButtonStyle onClick={handleClick} type="submit" size="x-large" border="1px solid rgb(118, 118, 118)">
        {prop.text}
      </ButtonStyle>
    </>
  );
}
