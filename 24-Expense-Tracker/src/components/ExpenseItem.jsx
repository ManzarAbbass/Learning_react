import { Trash } from "lucide-react"
const ExpenseItem = ({ item}) => {
  console.log(item)
  return (
    <div  className="bg-red-400 p-2">
    <ul className="flex gap-2">
      <li>{`id: ${item.id}`}</li>
      <li>{`type: ${item.type}`}</li>
      <li>{`category: ${item.category}`}</li>
      <li>{`amount: ${item.amount}`}</li>
    </ul>
    <button><Trash size={20}/></button>
    </div>
  )
}

export default ExpenseItem
