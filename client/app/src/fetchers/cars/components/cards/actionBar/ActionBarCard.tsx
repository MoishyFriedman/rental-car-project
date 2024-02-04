import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { DivBox } from "../../../../global/styled/styled";
import ShekelIcon from "../../../../../assets/israeli-shekel-icon";

export default function ActionBar(prop: { hour_price: number; seats_number: number }) {
  return (
    <>
      <DivBox width="100%" space="space-around">
        <DivBox align="center" space="space-between">
          <ShekelIcon />
          <DivBox width="1vh"></DivBox>
          <p>{prop.hour_price}</p>
        </DivBox>
        <DivBox align="center" space="space-between">
          <AirlineSeatReclineNormalIcon />
          <DivBox width="1vh"></DivBox>
          <p>{prop.seats_number}</p>
        </DivBox>
        <DivBox align="center">
          <ModeOfTravelIcon />
        </DivBox>
      </DivBox>
    </>
  );
}
