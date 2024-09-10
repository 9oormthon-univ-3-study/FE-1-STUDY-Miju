import * as M from "./MonthItem.style";

export default function MonthItem({ month }) {
  return <M.Button>{month}월</M.Button>;
}
