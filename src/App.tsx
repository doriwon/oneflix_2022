import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./Components/Board";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { draggableId, destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      //같은 보드에서 이동
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]]; //source.droppableId("To Do", Doing, Done) 로부터 array 복사
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);

        return {
          ...allBoards, // 수정되지 않는 다른 board 가져오기
          [source.droppableId]: boardCopy, //수정된 board
        }; //object
      });
    }
    if (destination.droppableId !== source.droppableId) {
      //다른 보드로 이동
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]]; //이동전 보드
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]]; //이동후 보드(목적지)
        sourceBoard.splice(source.index, 1); //이동전 보드에서 움직일 아이템의 위치
        destinationBoard.splice(destination?.index, 0, taskObj); //목적지 보드에서의 위치
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
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
