import { useDispatch, useSelector } from "react-redux"
import { setFilter, type Todo } from "../utils/TodoDataSLice";

const PendingTodo = ()=>{

    const dispatch = useDispatch();

    const todo = useSelector(store => store.Todo.value);
    const filter = useSelector(store => store.Todo.filter)

    const pendingTodo = todo.filter((t: Todo)  => t.status !=="green").length

    return(
        <div>
            <p className={
                filter == "red" ? 
                "border hover:cursor-pointer rounded-full p-1 mt-1 bg-blue-500 text-white " : 
                "border rounded-full p-1 mt-1 hover:cursor-pointer"
            } 
            onClick={()=>dispatch(setFilter("red"))}
            >
                Pending:{pendingTodo} 
            </p>
        </div>
    )
}

export default PendingTodo