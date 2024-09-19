import * as H from "./Home.style";
import Menu from "../components/home/menu/Menu";
import Month from "../components/home/month/Month";
import Chart from "../components/home/chart/Chart";
import Content from "../components/home/content/Content";
import { useState } from "react";

export default function Home() {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [selectedMonth, setSelectedMonth] = useState(1);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  return (
    <H.Container>
      <Menu />
      <Month months={months} onMonthSelect={handleMonthSelect} />
      <Chart month={selectedMonth} total={0} />
      <Content />
    </H.Container>
  );
}
