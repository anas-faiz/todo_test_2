import { CompletedTodoCount } from "./CompletedTodoCount"
import PendingTodo from "./PendingTodo"
import TotalTodoCount from "./TotalTodoCount"

const HeadLiner = ()=>{
    return(
        <div className="flex items-center justify-between">
            <TotalTodoCount/> 
            <CompletedTodoCount/>
            <PendingTodo/>            
        </div>
    )
}

export default HeadLiner