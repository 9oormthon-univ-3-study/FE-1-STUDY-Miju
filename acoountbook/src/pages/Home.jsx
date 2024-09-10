import * as H from "./Home.style";
import Menu from "../components/home/menu/Menu";
import Month from "../components/home/month/Month";

export default function Home() {
  return (
    <H.Container>
      <Menu />
      <Month />
    </H.Container>
  );
}
