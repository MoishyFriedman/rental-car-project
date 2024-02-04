import { DivBox } from "../../global/styled/styled";
import FormAddCar from "../components/addCar/Form";
import HeaderAddCar from "../components/addCar/headerComponent";

export default function AddCarPage() {
  return (
    <DivBox way="column">
      <HeaderAddCar />
      <FormAddCar />
    </DivBox>
  );
}
