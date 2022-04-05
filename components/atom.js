import { atom } from "jotai";

export const initCoordinate = [3, 3];
export const initBoard = [
  [15, 14, 13, 12],
  [11, 10, 9, 8],
  [7, 6, 5, 4],
  [3, 1, 2, 0],
];

export const boardAtom = atom(initBoard);
export const countAtom = atom(0);
export const coordinateAtom = atom(initCoordinate);
