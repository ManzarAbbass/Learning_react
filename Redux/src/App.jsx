import { useDispatch, useSelector } from "react-redux"
import { decreament, increament, increamentbyfive } from "./redux/features/counterSlice"
import { useState } from "react"

const App = () => {
  const [amount, setAmount] = useState("")
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
      <input 
      onChange={(e)=>{
        setAmount(e.target.value)
      }}
      value={amount}
      type="number" placeholder="select number" />
      <button 
      onClick={()=>{
        dispatch(increamentbyfive(Number(amount)))
      }}
      className="px-2 py-1 m-4 bg-blue-400">
        Increase by Amount
      </button>
    </div>
  )
}

export default App
