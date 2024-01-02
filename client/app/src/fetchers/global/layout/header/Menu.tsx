import { useState } from "react";
import { List, ListItemButton, ListItemText, Collapse, Box } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router";

export default function NavbarMenu() {
  const [service, setService] = useState(false);
  const navigate = useNavigate();

  const handleClickService = () => {
    setService(!service);
  };
  const handleClickListItem = (navigateTo: string) => {
    navigate(navigateTo);
    handleClickService();
  };
  return (
    <Box>
      <List
        sx={{
          maxWidth: 360,
          color: "black",
          bgcolor: "background.paper",
          position: "absolute",
          top: 0,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClickService}>
          <ListItemText primary="כל שירותי הרכב" />
          {service ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={service} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ zIndex: "5" }}>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                handleClickListItem("/cards");
              }}
            >
              <ListItemText primary="השכרת רכב" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="איתור רכב" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
