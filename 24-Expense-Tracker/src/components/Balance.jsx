import { useState } from "react"
import { useContext } from "react"
import { expenseContextData } from "../context/ExpenseContext"
import { calculateBalance,calculateExpense,calculateIncome } from "../utils/calculations" 


const Balance = ({ setForm }) => {
  const {transaction}= useContext(expenseContextData)
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-12 flex flex-col gap-4 items-center justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold">Total Balance</h2>
          <p className="text-2xl font-bold">{calculateBalance(transaction)}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold">Income</h2>
          <p className="text-2xl font-bold">{calculateIncome(transaction)}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold">Expense</h2>
          <p className="text-2xl font-bold">{calculateExpense(transaction)}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className={`border-s-olive-50 ${transaction.length === 0 ? 'block' : 'hidden'}`}>No transaction yet</p>
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
