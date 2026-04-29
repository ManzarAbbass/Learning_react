import React, { useState } from 'react'
import ExpenseContext from './context/ExpenseContext'
import Balance from './components/Balance'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'

const App = () => {
  const [form, setForm] = useState(false)
  return (
    <ExpenseContext>
      <div className="min-h-screen bg-[#f8f7ff]">
        <div className="max-w-xl mx-auto px-4 py-6 sm:py-10">
          <Balance form={form} setForm={setForm} />
          {form && <AddExpense setForm={setForm} form={form} />}
          <ExpenseList />
        </div>
      </div>
    </ExpenseContext>
  )
}

export default App
