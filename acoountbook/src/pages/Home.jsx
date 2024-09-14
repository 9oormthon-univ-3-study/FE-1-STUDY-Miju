import * as H from "./Home.style";
import Menu from "../components/home/menu/Menu";
import Month from "../components/home/month/Month";
import Chart from "../components/home/chart/Chart";
import Content from "../components/home/content/Content";

export default function Home() {
  return (
    <H.Container>
      <Menu />
      <Month />
      <Chart />
      <Content />
    </H.Container>
  );
}
