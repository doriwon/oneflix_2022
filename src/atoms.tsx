import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE"; //3개중 하나
}

export const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });
