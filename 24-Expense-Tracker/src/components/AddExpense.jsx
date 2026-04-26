
const AddExpense = ({ form, setForm }) => {
  return (
    <div className="h-screen flex items-center justify-center">
    <form  className={`flex flex-col gap-4 items-center justify-center ${form ? 'block' : 'hidden'}`}>
      <h2>Add Transaction</h2>
      <select name="type" id="type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="number" min={0} placeholder="Enter amount"/>
      <select 
      value={ca}
      >


      </select>

      <button 
      onClick={()=>{

      }}
      className="bg-amber-400 p-2 rounded text-white hover:bg-amber-200">Submit</button>
      <button
      className="bg-gray-400 p-2 rounded text-white hover:bg-gray-200"
      onClick={() => {
        setForm(false);
      }}
    >
      Cancel
    </button>
    </form>
    </div>
  )
}

export default AddExpense
