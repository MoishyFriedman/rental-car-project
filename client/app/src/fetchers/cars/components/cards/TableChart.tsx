import { useNavigate } from "react-router";
import { ButtonStyle } from "../../../global/styled/styled";
import TableChartIcon from "@mui/icons-material/TableChart";

export default function TableChart() {
  const navigate = useNavigate();
  return (
    <>
      <ButtonStyle onClick={() => navigate("/carsTable")} border="none" backgroundHover="none" borderHover="none">
        <TableChartIcon />;
      </ButtonStyle>
    </>
  );
}
