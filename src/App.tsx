import HeadLiner from "./components/HeadLiner";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

function App(){
  return (

    <div className="w-full min-h-screen flex justify-center items-center bg-red-300 ">
        <div className="w-full  max-w-md bg-white rounded-3xl p-2 shadow-black " >
            <div className="text-xl font-bold text-shadow-amber-300" >
              Todo APP
            </div>
            <div>
              <InputBox/>
              <HeadLiner/>
              <TodoList/>
            </div>
        </div>
    </div>
  )
}


export default App;