import * as C from "./Chart.style";
import Graph from "./Graph";

export default function Chart({ month, total }) {
  return (
    <C.Container>
      {month}월 총 지출: {total} 원
      <Graph />
    </C.Container>
  );
}
