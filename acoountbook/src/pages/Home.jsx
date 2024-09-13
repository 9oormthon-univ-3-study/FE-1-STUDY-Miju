import * as H from "./Home.style";
import Menu from "../components/home/menu/Menu";
import Month from "../components/home/month/Month";
import Chart from "../components/home/chart/Chart";

export default function Home() {
  return (
    <H.Container>
      <Menu />
      <Month />
      <Chart />
    </H.Container>
  );
}
