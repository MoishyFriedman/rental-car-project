import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Car } from "../../interfaces/interfaces";
import { CarImg, Card } from "./card.styled";
import { DivBox, Text } from "../../../global/styled/styled";
import ShekelIcon from "../../../../assets/israeli-shekel-icon";

export default function CarCard(prop: { car: Car }) {
  return (
    <Card>
      <DivBox way="column" width="50%" space="space-between">
        <DivBox way="column">
          <Text size="xx-large">{prop.car.manufacturer_model}</Text>
          <Text size="large" font="math">
            {prop.car.description}
          </Text>
        </DivBox>
        <DivBox width="100%" space="space-around">
          <DivBox align="center" space="space-between">
            <ShekelIcon />
            <DivBox width="1vh"></DivBox>
            <p>{prop.car.hour_price}</p>
          </DivBox>
          <DivBox align="center" space="space-between">
            <AirlineSeatReclineNormalIcon />
            <DivBox width="1vh"></DivBox>
            <p>{prop.car.seats_number}</p>
          </DivBox>
          <DivBox align="center">
            <ModeOfTravelIcon />
            {prop.car.location}
          </DivBox>
        </DivBox>
      </DivBox>
      <CarImg src={prop.car.image} alt={prop.car.image_alt} />
    </Card>
  );
}
