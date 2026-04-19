import { useSelector } from "react-redux"
import type { Todo } from "../utils/TodoDataSLice"

export const CompletedTodoCount = () => {
    const todo = useSelector((store : any) => store.Todo.value)
    const completedCount = todo.filter((t: Todo)  => t.status =="green").length    
    return (    
    <div>
        <p className="border rounded-full p-1 mt-1">completed: {completedCount} </p>
    </div>
  )
}
