import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value); // string : "1" -> number : 1 로 변경
  };
  return (
    <>
      <div>
        <span>Minutes : </span>
        <input
          value={minutes}
          onChange={onMinutesChange}
          type="number"
          placeholder="Minutes"
        />
      </div>
      <div>
        <span>Hours : </span>
        <input value={hours} type="number" placeholder="Hours" />
      </div>
    </>
  );
}

export default App;
