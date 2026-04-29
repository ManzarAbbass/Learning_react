import { Trash } from "lucide-react"
import { useContext } from "react"
import { expenseContextData } from "../context/ExpenseContext"

const ExpenseItem = ({ item }) => {
  const { deleteTransaction } = useContext(expenseContextData)

  return (
// ExpenseItem.jsx mein ye tabdeeli karein
<div className="bg-white border border-[#e8e4f8] rounded-2xl p-4 flex items-center justify-between gap-2 group">
  
  <div className="flex items-center gap-3 min-w-0"> {/* min-w-0 zaroori hai truncate ke liye */}
    <div className={`w-1.5 h-8 rounded-full flex-shrink-0 ${item.type === 'income' ? 'bg-green-500' : 'bg-red-500'}`} />
    
    <div className="min-w-0"> {/* text overflow rokne ke liye */}
      <p className="text-[#1a1040] font-semibold text-sm capitalize truncate">
        {item.category}
      </p>
      <p className="text-[#9991c4] text-[10px] uppercase tracking-wider">{item.date}</p>
    </div>
  </div>

  <div className="flex items-center gap-2 flex-shrink-0">
    <p className={`font-bold text-sm sm:text-base ${item.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
      {item.type === 'income' ? '+' : '-'} {item.amount}
    </p>
    <button onClick={() => deleteTransaction(item.id)} className="p-1.5 text-[#9991c4] hover:text-red-500">
      <Trash size={16} />
    </button>
  </div>
</div>

  )
}

export default ExpenseItem
