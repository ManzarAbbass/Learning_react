import React from 'react'
import ExpenseContext from './context/ExpenseContext'
import Balance from './components/Balance'

const App = () => {
  return (
    <ExpenseContext>
        <Balance/>
    </ExpenseContext>
  )
}

export default App
