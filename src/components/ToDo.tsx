import { IToDo } from "../atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <button>To Do</button>
      <button>Doing</button>
      <button>Done</button>
      <span>{text}</span>
    </li>
  );
}

export default ToDo;
