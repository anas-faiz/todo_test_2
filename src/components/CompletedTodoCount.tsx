import { useDispatch, useSelector } from "react-redux"
import { setFilter, type Todo } from "../utils/TodoDataSLice"

export const CompletedTodoCount = () => {
    const dispatch = useDispatch()
    const todo = useSelector((store : any) => store.Todo.value)
    const filter = useSelector(store => store.Todo.filter)
    const completedCount = todo.filter((t: Todo)  => t.status =="green").length    
    return (    
    <div>
        <p className={
                filter == "green" ? 
                "border rounded-full p-1 mt-1 bg-blue-500 text-white " : 
                "border rounded-full p-1 mt-1"
            } 
            onClick={()=>dispatch(setFilter("green"))} 
            >
              completed: {completedCount} 
            </p>
    </div>
  )
}
