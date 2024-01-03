import { Box, IconButton, Typography } from "@mui/material";
import CarRentalIcon from "@mui/icons-material/CarRental";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MapIcon from "@mui/icons-material/Map";
import car from "../../../assets/images/car.png";
import "./landing.css";
import { useNavigate } from "react-router";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: "100vh", minWidth: "100vw", position: "relative", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          height: "50vh",
          position: "relative",
          zIndex: "-1",
          backgroundColor: "#ff6900",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", position: "absolute", left: "150px" }}>
          <Typography variant="h2" color="white" marginTop="3vh" fontFamily="Fb Alfi">
            rental car
          </Typography>
          <Typography variant="h2" color="white" fontFamily="Arial Narrow">
            welcome!!!
          </Typography>
        </Box>
        <img src={car} alt="car"></img>
      </Box>
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
              navigate("/cards");
            }}
            sx={{ display: "flex", flexDirection: "column", color: "#5f526c" }}
          >
            <CarRentalIcon sx={{ width: "10vh", height: "10vh" }} />
            <Typography variant="h6">השכרת רכב</Typography>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
