import ButtonSubmit from "../filter/button/ButtonSubmit";
import { DivBox } from "../../../global/styled/styled";

export default function Buttons() {
  return (
    <DivBox way="row">
      <ButtonSubmit nav="/carsPage" text="דף הבית" />
      <ButtonSubmit text="הוסף רכב" />
    </DivBox>
  );
}
