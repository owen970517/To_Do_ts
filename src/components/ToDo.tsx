import React from "react"
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms"

function ToDo({ text,category,id }:IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget : {name} , } = e;
        setToDos(oldToDos => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id)
            
            const newToDo = {text,id,category:name as any}
            return [
                ...oldToDos.slice(0,targetIdx),
                 newToDo, 
                 ...oldToDos.slice(targetIdx+1)]
        })
    }
    const onDelete = (e:React.MouseEvent<HTMLButtonElement>) => {
        setToDos(oldToDos => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id)
            const removeToDo = oldToDos[targetIdx];
            localStorage.removeItem(removeToDo as any);
            return [
                ...oldToDos.slice(0,targetIdx),
                ...oldToDos.slice(targetIdx+1)]
        })
    }
    return (
        <li>
            <span>{text}</span>
            { category !==Categories.DOING && <button name={Categories.DOING } onClick={onClick}>Doing</button>}
            { category !==Categories.DONE && <button name={Categories.DONE } onClick={onClick}>Done</button>}
            { category !==Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>TO_DO</button>}
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}
export default ToDo