import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, updateStatus, type Todo } from "../utils/TodoDataSLice";
import { useEffect } from "react";

const TodoList =()=>{    
    const dispatch = useDispatch()
    const todo = useSelector(store => store.Todo.value);

    const handleClick=(id : number)=>{
        dispatch(updateStatus(id))
    }
    const handleDeleteTodo = (id : number)=>{       
    dispatch(deleteTodo(id))
    }
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todo))
    },[todo])

    return(
        <div className="p-1 m-2" >
            {
                todo.length == 0 ? 
                ( <div>
                    Add Jobs
                </div>):(
                    todo.map((t : Todo)=>(
                        <div key={t.id}>
                            <div className="flex items-center" >
                            <input 
                            className={"p-1 mr-2" } 
                            type="checkbox"
                            checked = {t.status == "green"}
                            onChange={()=>handleClick(t.id)}
                            />
                            <p className={t.status == "green" ? "line-through text-gray-400" : ""}  >
                            {t.text}
                            </p>
                            <button className="p-1 m-1 bg-red-300" onClick={()=>handleDeleteTodo(t.id)}>REMOVE</button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default TodoList