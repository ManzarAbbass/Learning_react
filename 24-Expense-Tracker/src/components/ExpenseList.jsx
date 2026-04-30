import { useContext, useState } from "react"
import { expenseContextData } from "../context/ExpenseContext"
import ExpenseItem from "./ExpenseItem"

const ExpenseList = () => {
    const { transaction } = useContext(expenseContextData)
    const [filter, setFilter] = useState([])

    if (transaction.length === 0) {
        return (
            <div className="bg-white border border-[#e8e4f8] rounded-2xl p-10 text-center mt-6">
                <p className="text-[#9991c4] text-sm font-medium italic">No transactions recorded yet.</p>
            </div>
        )
    }

const uniqueCategories = Array.from(
  new Set(transaction.map((item) => item.category))
)

    return (
        <div className="mt-8">
            {/* Header section matching Balance style */}
            <div className="flex justify-between items-center mb-4 px-2">
                <h2 className="text-xs text-[#9991c4] uppercase tracking-[0.2em] font-bold">
                    Recent Transactions
                </h2>
                <select 
                onChange={(e)=>{
                    setFilter(e.target.value)
                }}
                className="bg-white border border-[#e8e4f8] text-[#1a1040] text-[11px] font-bold uppercase tracking-wider rounded-lg px-3 py-1.5 outline-none focus:border-[#7c3aed] cursor-pointer appearance-none"
                name="filter" id="filter">
                    <option value="All">All</option>
                    {uniqueCategories.map((uniq)=>{
                        return <option value={uniq}>{uniq}</option>
                    })}
                </select>
                <span className="text-[10px] bg-[#f8f7ff] text-[#7c3aed] px-2 py-1 rounded-full font-bold border border-[#e8e4f8]">
                    {transaction.length} Total
                </span>
            </div>

            {/* Transaction Items Container */}
            <div className="flex flex-col gap-3">
                {transaction.map((item) => (
                    <ExpenseItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ExpenseList
