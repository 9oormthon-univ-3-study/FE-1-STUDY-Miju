import { useState } from "react";
import * as M from "./Month.style";
import MonthItem from "./MonthItem";

export default function Month({ months, onMonthSelect }) {
  const [selected, setSelected] = useState();

  const handleClick = (month) => {
    setSelected(month);
    onMonthSelect(month);
  };

  return (
    <M.Container>
      {months.map((month) => (
        <MonthItem
          key={month}
          month={month.toString()}
          isSelected={selected === month}
          onClick={() => handleClick(month)}
        />
      ))}
    </M.Container>
  );
}
