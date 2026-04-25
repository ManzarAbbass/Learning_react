import { useContext } from "react"

export const expenseContextData = useContext()
const ExpenseContext = (Props) => {
  return (
    <div>
      <expenseContextData.Provider value={ }>
      {Props.children}
      </expenseContextData.Provider>
    </div>
  )
}

export default ExpenseContext
