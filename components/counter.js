import { useAtom } from "jotai";
import { countAtom } from "./atom";

export default function Counter() {
  const [count] = useAtom(countAtom);

  return <p>step: {count}</p>;
}
