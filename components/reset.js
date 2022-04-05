import styles from "../styles/Home.module.css";
import { useAtom } from "jotai";
import {
  boardAtom,
  countAtom,
  coordinateAtom,
  initBoard,
  initCoordinate,
} from "./atom";

export default function Reset() {
  const [_coordinate, setCoordinate] = useAtom(coordinateAtom);
  const [_board, setBoard] = useAtom(boardAtom);
  const [_count, setCount] = useAtom(countAtom);

  const reset = () => {
    setBoard(initBoard);
    setCoordinate(initCoordinate);
    setCount(0);
  };
  return (
    <button className={styles.reset} onClick={reset}>
      reset
    </button>
  );
}
