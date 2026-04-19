import { CompletedTodoCount } from "./CompletedTodoCount"
import TotalTodoCount from "./TotalTodoCount"

const HeadLiner = ()=>{
    return(
        <div className="flex w-1/2 items-center justify-between">
            <TotalTodoCount/> 
            <CompletedTodoCount/>            
        </div>
    )
}

export default HeadLiner