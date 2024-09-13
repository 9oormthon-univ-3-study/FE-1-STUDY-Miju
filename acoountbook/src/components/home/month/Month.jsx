import * as M from "./Month.style";
import MonthItem from "./MonthItem";

export default function Month() {
  return (
    <M.Container>
      <MonthItem month="1" />
      <MonthItem month="2" />
      <MonthItem month="3" />
      <MonthItem month="4" />
      <MonthItem month="5" />
      <MonthItem month="6" />
      <MonthItem month="7" />
      <MonthItem month="8" />
      <MonthItem month="9" />
      <MonthItem month="10" />
      <MonthItem month="11" />
      <MonthItem month="12" />
    </M.Container>
  );
}
