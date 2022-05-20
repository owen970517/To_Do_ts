import React from "react";
import {  useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
   
    const toDos = useRecoilValue(toDoSelector);
    // 값과 수정 함수 둘다 반환
    const [category,setCategory] = useRecoilState(categoryState)
    const onInput = (e:React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as any);
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo/>
            {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
        </div>
    )
}
export default ToDoList