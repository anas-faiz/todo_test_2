import { useDispatch, useSelector } from "react-redux"
import { updateStatus, type Todo } from "../utils/TodoDataSLice";

const TodoList =()=>{
    
    const dispatch = useDispatch()
    const todo = useSelector(store => store.Todo.value);

    const handleClick=(id : number)=>{
        dispatch(updateStatus(id))
    }

    return(
        <div className="p-1 m-2" >
            {
                todo.length == 0 ? 
                ( <div>
                    Add Todo Jobs
                </div>):(
                    todo.map((t : Todo)=>(
                        <div key={t.id}>
                            <div className="flex" >
                            <input 
                            className={"p-1 mr-2" } 
                            type="checkbox"
                            onChange={()=>handleClick(t.id)}
                            />
                            <p className={t.status == "green" ? "line-through text-gray-400" : ""}  >
                            {t.text}
                            </p>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default TodoList