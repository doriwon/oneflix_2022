import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./Components/Board";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 630px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return; //같은 자리에 둘 경우

    /*setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      // 1) source.index에서 아이템 삭제하기
      toDosCopy.splice(source.index, 1);
      // 2) destination.index로 아이템 다시 돌려주기
      toDosCopy.splice(destination?.index, 0, draggableId);

      return toDosCopy;
    });*/
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
