
const AddExpense = ({ form }) => {
  return (
    <form  className={`flex flex-col gap-4 items-center justify-center ${form ? 'block' : 'hidden'}`}>
      <h2>Add Transaction</h2>
      <select name="type" id="type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="text" placeholder="Enter description"/>
      <input type="number" placeholder="Enter amount"/>
      <button className="bg-amber-400 p-2 rounded text-white hover:bg-amber-200">Add Transaction</button>
    </form>
  )
}

export default AddExpense
