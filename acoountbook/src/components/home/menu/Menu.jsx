import { useState } from "react";
import Input from "./Input";
import * as M from "./Menu.style";

export default function Menu() {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = `${year}-${month}-${day}`;

  const [date, setDate] = useState(dateString);

  return (
    <M.Container>
      <Input
        name="date"
        title="날짜"
        type="text"
        placeholder="YYYY-MM-DD"
        value={date}
      />
      <Input name="item" title="항목" type="text" placeholder="지출 항목" />
      <Input name="amount" title="금액" type="number" placeholder="지출 금액" />
      <Input
        name="description"
        title="내용"
        type="text"
        placeholder="지출 내용"
      />
      <M.Button type="button">저장</M.Button>
    </M.Container>
  );
}
