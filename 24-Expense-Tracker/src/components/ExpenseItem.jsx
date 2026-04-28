import { Trash } from "lucide-react"
const ExpenseItem = ({ item }) => {
  console.log(item)
  return (
    <div className="bg-red-400">
    <ul>
      <li>{item.type}</li>
    </ul>
    <button><Trash size={20}/></button>
    </div>
  )
}

export default ExpenseItem
