import { Trash } from "lucide-react"
import { useContext } from "react"
import { expenseContextData } from "../context/ExpenseContext"

const ExpenseItem = ({ item }) => {
  const { deleteTransaction } = useContext(expenseContextData)

  return (
    <div className="bg-white border border-[#e8e4f8] rounded-2xl p-4 flex items-center justify-between group hover:shadow-md transition-shadow">
      
      <div className="flex items-center gap-4">
        {/* Type Indicator Circle */}
        <div className={`w-2 h-10 rounded-full ${item.type === 'income' ? 'bg-green-500' : 'bg-red-500'}`} />
        
        <div>
          <p className="text-[#1a1040] font-semibold text-sm capitalize">{item.category}</p>
          <p className="text-[#9991c4] text-[10px] uppercase tracking-wider">{item.date || 'No Date'}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className={`font-bold text-base ${item.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
            {item.type === 'income' ? '+' : '-'} Rs.{Math.abs(item.amount).toFixed(2)}
          </p>
        </div>

        <button
          onClick={() => deleteTransaction(item.id)}
          className="text-[#9991c4] hover:text-red-500 p-2 hover:bg-red-50 rounded-lg transition-all"
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  )
}

export default ExpenseItem
