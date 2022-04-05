import { useAtom } from "jotai";
import { boardAtom } from "./atom";

export default function Congratulation() {
  const [board] = useAtom(boardAtom);
  const answer = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ];
  const isEquals = (boardA, boardB) => {
    return boardA.every((row, y) => {
      return row.every((el, x) => el === boardB[y][x]);
    });
  };
  return isEquals(board, answer) && <p>You win</p>;
}
