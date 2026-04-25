import { useState } from "react"
import { useContext } from "react"



const Balance = () => {
  const [form, setForm] = useState(false)
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 rounded ">
      <div className="p-12 flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold">Total Balance</h2>
          <p>0</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold">Income</h2>
          <p>0</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold">Expense</h2>
          <p>0</p>
        </div>
        <div className="flex flex-col items-center">
          <p>No transaction yet</p>
        </div>
        <button 
        onClick={()=>{
          setForm(true)
        }}
        className="bg-amber-400 p-2 rounded text-white hover:bg-amber-200">Add Transaction</button>
      </div>
    </div>
  )
}

export default Balance
