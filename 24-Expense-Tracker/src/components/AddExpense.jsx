import { useContext, useState } from "react";
import { expenseContextData } from "../context/ExpenseContext";

const AddExpense = ({ form, setForm }) => {
  const { addTransaction } = useContext(expenseContextData)
  const [type, setType] = useState("Income")
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const AddTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      type: type.toLowerCase(),
      category:category,
      amount: parseFloat(amount),
      date: date
  }
  addTransaction(newTransaction)
}
  return (
    <div className="h-screen flex items-center justify-center bg-brand-bg">
      <form onSubmit={(e) => {
        e.preventDefault();
        // Handle form submission here, such as sending data to an API or updating state
      }}
        className="bg-[#110e24] border border-[#1e1a35] rounded-xl p-8 flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-white text-xl font-medium">Add Transaction</h2>
        <p className="text-[#4a4270] text-xs uppercase tracking-widest">Type</p>
        <div className="flex bg-[#1a1530] rounded-full p-1 border border-[#2e2550]">
          <button
            onClick={() => {
              setType("Income")
            }}
            className="flex-1 py-2 rounded-full bg-brand-accent text-white text-sm border-solid-[#2e2550]">Income</button>
          <button
            onClick={() => {
              setType("Expense")
            }}
            className="flex-1 py-2 rounded-full bg-brand-accent text-white text-sm border-solid-[#2e2550]">Expense</button>
        </div>
        <p className="text-[#4a4270] text-xs uppercase tracking-widest">Category</p>
        <select
          onChange={(e) => {
            setCategory(e.target.value)
          }}
          className="w-full bg-[#1a1530] border border-[#2e2550] rounded-lg px-4 py-2.5 text-[#e2e0f0] text-sm outline-none">
          <option value={type} >Select category</option>
          {type === "Income" ?
            (
              <>
                <option value="Salary">Salary</option>
                <option value="Freelance">Freelance</option>
                <option value="Business">Business</option>
                <option value="Investment">Investment</option>
                <option value="Other">Other</option>
              </>
            ) : (<>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Health">Health</option>
              <option value="Other">Other</option>
            </>
            )}
        </select>

        <p className="text-[#4a4270] text-xs uppercase tracking-widest">Amount</p>
        <input
          onChange={(e) => {
            setAmount(e.target.value)
          }}
          type="number"
          placeholder="Rs.0.00"
          min={0}
          value={amount}
          className="w-full bg-[#1a1530] border border-[#2e2550] rounded-lg px-4 py-2.5 text-[#e2e0f0] text-sm outline-none"
        />
        <p className="text-[#4a4270] text-xs uppercase tracking-widest">Date</p>
        <input
          onChange={(e) => {
            setDate(e.target.value)
          }}
          value={date}
          type="date" id="date" name="date"
          className="w-full bg-[#1a1530] border border-[#2e2550] rounded-lg px-4 py-2.5 text-[#e2e0f0] text-sm outline-none"
        />


        <button
          onClick={() => {
            AddTransaction();
          }}
          className="bg-amber-400 p-2 rounded text-white hover:bg-amber-200">Add Transaction</button>
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
