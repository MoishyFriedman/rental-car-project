import { Box, IconButton, Typography } from "@mui/material";
import CarRentalIcon from "@mui/icons-material/CarRental";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MapIcon from "@mui/icons-material/Map";
import car from "../../../assets/images/car.png";
import { useNavigate } from "react-router";

export default function ActionBarLanding() {
  // const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "space-around", width: "50vw", borderRadius: "0px 0px 25px 25px", backgroundColor: "#ff690038" }}>
        <IconButton onClick={() => {}} sx={{ display: "flex", flexDirection: "column", color: "#5f526c" }}>
          <HelpOutlineIcon sx={{ width: "10vh", height: "10vh" }} />
          <Typography variant="h6">עזרה ותמיכה</Typography>
        </IconButton>
        <IconButton onClick={() => {}} sx={{ display: "flex", flexDirection: "column", color: "#5f526c" }}>
          <MapIcon sx={{ width: "10vh", height: "10vh" }} />
          <Typography variant="h6">איתור רכב</Typography>
        </IconButton>
        <IconButton
          onClick={() => {
            // navigate("/cards");
          }}
          sx={{ display: "flex", flexDirection: "column", color: "#5f526c" }}
        >
          <CarRentalIcon sx={{ width: "10vh", height: "10vh" }} />
          <Typography variant="h6">השכרת רכב</Typography>
        </IconButton>
      </Box>
    </Box>
  );
}
