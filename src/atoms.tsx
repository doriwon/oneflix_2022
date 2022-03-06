import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}
export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "c", "d", "e"],
    Doing: ["1", "2", "3"],
    Done: ["ㄱ", "ㄴ", "ㄷ"],
  },
});
