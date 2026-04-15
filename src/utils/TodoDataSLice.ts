import { createSlice } from "@reduxjs/toolkit";

 export interface Todo{
    id:number,
    text: string,
    status: "green" | "red"
}
interface data{
    value: Todo[]
}

const initialState: data ={
    value: []
}

const TodoDataSlice = createSlice({
    name: "Todo",
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.value.push(action.payload)
        },
        updateStatus:(state,action)=>{
            const todo = state.value.find(t => t.id == action.payload);

            if(todo){
                todo.status = "green"
            }
        }
    }
})

export const {addData,updateStatus} = TodoDataSlice.actions

export default TodoDataSlice.reducer