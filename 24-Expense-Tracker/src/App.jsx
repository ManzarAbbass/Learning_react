import React, { useState } from 'react'
import ExpenseContext from './context/ExpenseContext'
import Balance from './components/Balance'
import AddExpense from './components/AddExpense'

const App = () => {
  const [form, setForm] = useState(false)
  return (
    <ExpenseContext>
      <Balance setForm={setForm}/>
      {form && <AddExpense form={ form }/>}
    </ExpenseContext>
  )
}

export default App
