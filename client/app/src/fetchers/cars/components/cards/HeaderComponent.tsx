import { DivBox } from "../../../global/styled/styled";
import TableChart from "./TableChart";

export default function HeaderComponent() {
  return (
    <DivBox space="center" way="column">
      <DivBox space="space-between">
        <DivBox align="center">
          <TableChart />
        </DivBox>
        <DivBox>
          <h1>השכרת רכב</h1>
        </DivBox>
        <DivBox></DivBox>
      </DivBox>
      <h2>בואו להנות ממהפכת הרכב השיתופי תוך שימוש ברכבים חדישים ונוחים להשכרה החל משעה בודדת ועד לתקופות ארוכות</h2>
    </DivBox>
  );
}
