
export const loadTodo = ()=>{
    try {
        const data = localStorage.getItem("todos")
        return data ? JSON.parse(data) : []
    } catch (error) {
        return []
    }
}