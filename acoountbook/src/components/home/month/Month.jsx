import { useState } from "react";
import * as M from "./Month.style";
import MonthItem from "./MonthItem";

export default function Month() {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [selected, setSelected] = useState();

  return (
    <M.Container>
      {months.map((month) => (
        <MonthItem
          key={month}
          month={month.toString()}
          isSelected={selected === month}
          onClick={() => setSelected(month)}
        />
      ))}
    </M.Container>
  );
}
