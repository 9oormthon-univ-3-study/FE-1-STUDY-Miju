import * as M from "./MonthItem.style";

export default function MonthItem({ month, isSelected, onClick }) {
  return (
    <M.Button isSelected={isSelected} onClick={onClick}>
      {month}월
    </M.Button>
  );
}
