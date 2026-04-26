import React, { useState } from 'react'
import ExpenseContext from './context/ExpenseContext'
import Balance from './components/Balance'
import AddExpense from './components/AddExpense'

const App = () => {
  const [form, setForm] = useState(false)
  return (
    <ExpenseContext>
      <Balance form={form} setForm={setForm}/>
      {form && <AddExpense setForm={setForm} form={form} />}
    </ExpenseContext>
  )
}

export default App
