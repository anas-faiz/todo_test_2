import { createSlice } from "@reduxjs/toolkit";
import { loadTodo } from "./loadTodo";

 export interface Todo{
    id:number,
    text: string,
    status: "green" | "red"
}
interface data{
    value: Todo[],
    filter: "all" | "green" | "red"
}

const initialState: data ={
    value: loadTodo(),
    filter: "all"
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
                todo.status =  todo.status === "green" ? "red" : "green"
            }
        },
        deleteTodo:(state,action)=>{
            const todo = state.value.find(t=>t.id == action.payload);

            if(todo){
                state.value = state.value.filter(t=> t.id !== todo.id)
            }
        },
        setFilter: (state,action)=>{
            state.filter = action.payload
        }
    }
})

export const {addData,updateStatus,deleteTodo,setFilter} = TodoDataSlice.actions

export default TodoDataSlice.reducer