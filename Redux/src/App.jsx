import { useDispatch, useSelector } from "react-redux"
import { decreament, increament } from "./redux/features/counterSlice"

const App = () => {
  const dispatch=useDispatch()
  const count= useSelector((state)=>state.counter.value)

  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold p-4 bg-gray-400 w-fit">{count}</h1>
      <button 
      onClick={()=>{
        dispatch(increament())
      }}
      className="px-2 py-1 m-4 bg-amber-400">increament</button>
      <button 
      onClick={()=>{
        dispatch(decreament())
      }}
      className="px-2 py-1 m-4 bg-blue-400">decreament</button>
    </div>
  )
}

export default App
