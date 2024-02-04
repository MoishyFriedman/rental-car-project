import { useState } from "react";
import { DivBox } from "../../../global/styled/styled";
import FormFilter from "./form/formFilter";

export default function Filter() {
  const [carsModel, setCarsModel] = useState(["toyota", "jeep", "tesla"]);
  const [prices, setPrices] = useState([15, 20, 30]);

  return (
    <>
      <DivBox space="center" align="center" height="20vh" width="100%">
        <DivBox grow="4" height="5vh"></DivBox>
        <FormFilter modelArray={carsModel} priceArray={prices} />
        <DivBox grow="4" height="5vh"></DivBox>
      </DivBox>
    </>
  );
}
