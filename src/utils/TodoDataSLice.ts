import { createSlice } from "@reduxjs/toolkit";
import { loadTodo } from "./loadTodo";

 export interface Todo{
    id:number,
    text: string,
    status: "green" | "red"
}
interface data{
    value: Todo[]
}

const initialState: data ={
    value: loadTodo()
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
        },
        deleteTodo:(state,action)=>{
            const todo = state.value.find(t=>t.id == action.payload);

            if(todo){
                state.value = state.value.filter(t=> t.id !== todo.id)
            }
        }
    }
})

export const {addData,updateStatus,deleteTodo} = TodoDataSlice.actions

export default TodoDataSlice.reducer