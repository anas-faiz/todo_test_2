import { useSelector } from "react-redux"

export const CompletedTodoCount = () => {
    const todo = useSelector(store => store.Todo.value)
    const completedCount = todo.filter(t => t.status =="green").length
    
    return (
    
    <div>
        <p className="border rounded-full p-1 mt-1">completed: {completedCount} </p>
    </div>
  )
}
