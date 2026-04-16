import { useSelector } from "react-redux"

const TotalTodoCount= ()=>{
    const Todo = useSelector(store => store.Todo.value)
    return(
        <div>
            <p className="border rounded-full p-1 mt-1">Todos: {Todo.length}</p>
        </div>
    )
}

export default TotalTodoCount