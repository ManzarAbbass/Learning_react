import { useState } from "react"
import { useContext } from "react"
import { expenseContextData } from "../context/ExpenseContext"
import { calculateBalance,calculateExpense,calculateIncome } from "../utils/calculations" 


const Balance = ({ form, setForm }) => {
  const { transaction } = useContext(expenseContextData)
  return (
    <div className={`${form ? 'hidden' : 'block'}`}>

      <div className="bg-white border border-[#e8e4f8] rounded-2xl p-7">

        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-xs text-[#9991c4] uppercase tracking-widest mb-1">Total Balance</p>
            <p className="text-4xl font-medium text-[#1a1040]">
              {`Rs. ${calculateBalance(transaction).toFixed(2)}`}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f8f7ff] border border-[#e8e4f8] border-l-4 border-l-green-500 rounded-xl p-4">
            <p className="text-xs text-[#9991c4] uppercase tracking-widest mb-1">Income</p>
            <p className="text-lg font-medium text-[#1a1040]">
              {`Rs. ${calculateIncome(transaction).toFixed(2)}`}
            </p>
          </div>
          <div className="bg-[#f8f7ff] border border-[#e8e4f8] border-l-4 border-l-red-500 rounded-xl p-4">
            <p className="text-xs text-[#9991c4] uppercase tracking-widest mb-1">Expense</p>
            <p className="text-lg font-medium text-[#1a1040]">
              {`Rs. ${calculateExpense(transaction).toFixed(2)}`}
            </p>
          </div>
        </div>

        {transaction.length === 0 && (
          <p className="text-center text-[#b8b0d8] text-sm mt-4">No transactions yet</p>
        )}

        <button
          onClick={() => setForm(true)}
          className="w-full bg-[#7c3aed] text-white rounded-xl py-3 text-sm font-medium mt-5 hover:opacity-90 cursor-pointer transition-opacity">
          + Add Transaction
        </button>

      </div>
    </div>
  )
}

export default Balance
