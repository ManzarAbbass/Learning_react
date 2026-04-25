import { createContext, useEffect, useState } from "react"

export const expenseContextData = createContext()
const ExpenseContext = (Props) => {
  const dataStore=localStorage.getItem("transaction")
  const [transaction, settransaction] = useState(dataStore?JSON.parse(dataStore): [])
  useEffect(()=>{
    localStorage.setItem("transactions",JSON.stringify(transaction))
  },[transaction])

  const addTransaction=(newTransaction)=>{
    settransaction([...transaction,newTransaction])
  }

  const deleteTransaction=(id)=>{
    settransaction(transaction.filter((item)=>(item.id !==id)))
    }
    return (
      <expenseContextData.Provider value={{ transaction,addTransaction,deleteTransaction}}>
      {Props.children}
      </expenseContextData.Provider>
  )
}


export default ExpenseContext
