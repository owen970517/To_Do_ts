import { useForm } from "react-hook-form";
import {useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface FormProps {
    toDo : string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {register , handleSubmit , setValue} = useForm<FormProps>();
    const handleValid = ({toDo}:FormProps) => {
        setToDos(oldToDos => [{text:toDo ,id:Date.now(),category},...oldToDos])
        setValue("toDo" , "");
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("toDo" , {
            required : "할 일을 적으시오"
        })} placeholder="toDo적어" ></input>
        <span>
            
        </span>
        <button>Add</button>
    </form>
    )
}
export default CreateToDo