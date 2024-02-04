import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { DivBox, Text } from "../../styled/styled";

export default function Icon(prop: { text: string }) {
  return (
    <DivBox space="center">
      <DivBox space="space-around" width="50vw" radius="0px 0px 25px 25px" background="#ff690038">
        <a onClick={() => {}} sx={{ display: "flex", flexDirection: "column", color: "#5f526c" }}>
          <HelpOutlineIcon sx={{ width: "10vh", height: "10vh" }} />
          <Text>{prop.text}</Text>
        </a>
      </DivBox>
    </DivBox>
  );
}
