import { Trash } from "lucide-react"
const ExpenseItem = ({ item}) => {
  const { deleteTransaction } = useContext(expenseContextData)
  return (
    <div  className={`text-white flex gap-4 p-2 ${item.type === 'income' ? 'bg-green-500' : 'bg-red-500'}`} >
    <ul className="flex gap-2">
      <li>{`id: ${item.id}`}</li>
      <li>{`type: ${item.type}`}</li>
      <li>{`category: ${item.category}`}</li>
      <li>{`amount: ${item.amount}`}</li>
    </ul>
    <button
    onClick={()=>{
      deleteTransaction(item.id)
    }}
     ><Trash size={20}/></button>
    </div>
  )
}

export default ExpenseItem
