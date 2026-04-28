import { Trash } from "lucide-react"
const ExpenseItem = ({ item, key }) => {
  console.log(item)
  return (
    <div key={key} className="bg-red-400">
    <ul className="flex">
      <li>{item.id}</li>
      <li>{item.type}</li>
      <li>{item.category}</li>
      <li>{item.amount}</li>
    </ul>
    <button><Trash size={20}/></button>
    </div>
  )
}

export default ExpenseItem
