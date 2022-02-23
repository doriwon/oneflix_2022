import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE"; //3개중 하나
}

export const categoryState = atom({ key: "category", default: "TO_DO" });

export const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
