import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFrom {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}
function ToDoList() {
  /*const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
    setToDoError("");
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo.length < 10) {
      return setToDoError("더 길게 쓰시오");
    }
    console.log("확인");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );*/

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<IFrom>({ defaultValues: { email: "@naver.com" } });
  const onValid = (data: IFrom) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same." },
        { shouldFocus: true } //오류 발생 시 포커스 커서 자동
      );
    }
    setError("extraError", { message: "Server offline." });
    setValue("email", "");
  };
  //console.log(watch()); //작성할 때마다 호출
  console.log(errors); //에러 메세지 표시
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              // 정규식 조건 걸기
              value: /^[A-Za-z0-9._%+-]+@naver.com$/, //A~Z, 숫자, 부호 가능 + 네이버만 가능
              message: "only naver allowed",
            },
          })}
          placeholder="Email"
        />
        {/* ...register 가 반환하는 모든것들을 넣어줌 */}
        <span>{errors?.email?.message}</span>
        {/* 없을 경우도 있으니 ? 추가, 작성하는 도중 경고창 뜸 */}
        <input
          {...register("firstName", {
            required: true,
            validate: (value) =>
              value.includes("son") ? 'no "son" allowed' : true, //son 이라는 텍스트 포함시 오류 메세지 노출
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", {
            required: "Write here",
          })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "Write he2re",
            validate: {
              noSon: (value) =>
                value.includes("jiwon") ? 'no "jiwon" allowed' : true,
              noKim: (value) =>
                value.includes("hawon") ? 'no "hawon" allowed' : true,
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "Write here",
            minLength: { value: 10, message: "write over 10" },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
export default ToDoList;
