import { useState } from "react"
import Btn from "./Btn"

const InputBox = ()=>{
    const [input,setInput] = useState("")
    return(
        <div className="flex items-center">
            <input 
            className="border bg-gray-500 text-amber-50 p-2 m-1 rounded-2xl" 
            placeholder="Enter Work" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <Btn input={input} setInput={setInput}/>
        </div>
    )
}

export default InputBox