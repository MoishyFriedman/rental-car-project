import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Car } from "../interfaces/interfaces";
import "./style/card.css";

export default function CarCard(prop: { car: Car }) {
  return (
    <Card>
      <CardMedia sx={{ height: "140px", width: "200px" }} image={prop.car.image} title={prop.car.image_alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prop.car.manufacturer_model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prop.car.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          מקומות {prop.car.seats_number}
        </Typography>
      </CardContent>
      <hr id="hr"></hr>
      <CardActions>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <LocationOnIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
