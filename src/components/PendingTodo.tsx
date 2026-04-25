import { useSelector } from "react-redux"
import type { Todo } from "../utils/TodoDataSLice";

const PendingTodo = ()=>{

    const todo = useSelector(store => store.Todo.value);

    const pendingTodo = todo.filter((t: Todo)  => t.status !=="green").length

    return(
        <div>
            <p className="border rounded-full p-1 mt-1">Pending:{pendingTodo} </p>
        </div>
    )
}

export default PendingTodo