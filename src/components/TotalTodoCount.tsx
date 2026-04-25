import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../utils/TodoDataSLice"

const TotalTodoCount= ()=>{
    const dispatch = useDispatch()
    const Todo = useSelector(store => store.Todo.value)
    const filter = useSelector(store => store.Todo.filter)

    return(
        <div>
            <p className={
                filter == "all" ? 
                "border rounded-full p-1 mt-1 bg-blue-500 text-white " : 
                "border rounded-full p-1 mt-1"
            } 
                onClick={()=>dispatch(setFilter("all"))}
            >
                All:{Todo.length}
            </p>
        </div>
    )
}
export default TotalTodoCount