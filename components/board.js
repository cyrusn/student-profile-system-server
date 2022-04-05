import { useAtom } from "jotai";
import { countAtom, boardAtom, coordinateAtom } from "./atom";
import styles from "../styles/Home.module.css";

export default function Board() {
  const [coordinate, setCoordinate] = useAtom(coordinateAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const [count, setCount] = useAtom(countAtom);
  const [x, y] = coordinate;
  const clonedBoard = JSON.parse(JSON.stringify(board));

  const moveDown = () => {
    if (y > 0) {
      const temp = clonedBoard[y - 1][x];
      clonedBoard[y][x] = temp;
      clonedBoard[y - 1][x] = 0;
      setBoard(clonedBoard);
      setCoordinate([x, y - 1]);
      setCount(count + 1);
    }
  };

  const moveUp = () => {
    if (y < 3) {
      const temp = clonedBoard[y + 1][x];
      clonedBoard[y][x] = temp;
      clonedBoard[y + 1][x] = 0;
      setBoard(clonedBoard);
      setCoordinate([x, y + 1]);
      setCount(count + 1);
    }
  };

  const moveRight = () => {
    if (x > 0) {
      const temp = clonedBoard[y][x - 1];
      clonedBoard[y][x] = temp;
      clonedBoard[y][x - 1] = 0;
      setBoard(clonedBoard);
      setCoordinate([x - 1, y]);
      setCount(count + 1);
    }
  };

  const moveLeft = () => {
    if (x < 3) {
      const temp = clonedBoard[y][x + 1];
      clonedBoard[y][x] = temp;
      clonedBoard[y][x + 1] = 0;
      setBoard(clonedBoard);
      setCoordinate([x + 1, y]);
      setCount(count + 1);
    }
  };

  const handleClick = (cx, cy) => {
    if (cx === x) {
      if (cy === y - 1) {
        return moveDown();
      }
      if (cy === y + 1) {
        return moveUp();
      }
    }

    if (cy === y) {
      if (cx === x - 1) {
        return moveRight();
      }
      if (cx === x + 1) {
        return moveLeft();
      }
    }
  };

  return (
    <table className={styles.board}>
      <tbody>
        {board.map((row, cy) => {
          return (
            <tr key={"row-" + cy}>
              {row.map((el, cx) => {
                return (
                  <td key={"el-" + cx} onClick={() => handleClick(cx, cy)}>
                    {el !== 0 ? el : ""}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
