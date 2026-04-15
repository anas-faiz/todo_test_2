import { useDispatch } from "react-redux"
import { addData } from "../utils/TodoDataSLice"
 
 interface BtnProps{
    input: string,
    setInput: (value: string)=> void
 }

 const Btn = ({input,setInput}:BtnProps)=>{

    const dispatch = useDispatch()
    
    const handleClick = ()=>{
      dispatch(addData({id:Date.now(),text:input,status:"red"}))
      setInput("")
    }    
    return(
        <div>
            <button 
            className="border rounded-xl p-2 text-center bg-red-400"
            onClick={handleClick}
            >
                add
            </button>
        </div>
    )
}

export default Btn