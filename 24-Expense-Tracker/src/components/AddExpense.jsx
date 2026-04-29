import { useContext, useState } from "react";
import { expenseContextData } from "../context/ExpenseContext";

const AddExpense = ({ form, setForm }) => {
  const { addTransaction } = useContext(expenseContextData);
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount || !date) return alert("Please fill all fields");

    const newTransaction = {
      id: Date.now(),
      type: type.toLowerCase(),
      category: category,
      amount: parseFloat(amount),
      date: date,
    };

    addTransaction(newTransaction);
    setForm(false); // Form close karne ke liye
  };

  if (!form) return null;

  return (
    <div className="fixed inset-0 bg-[#1a1040]/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <form 
        onSubmit={handleSubmit}
        className="bg-white border border-[#e8e4f8] rounded-2xl p-7 flex flex-col gap-5 w-full max-w-md shadow-xl"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#1a1040]">Add Transaction</h2>
          <button 
            type="button" 
            onClick={() => setForm(false)}
            className="text-[#9991c4] hover:text-[#1a1040]"
          >
            ✕
          </button>
        </div>

        {/* Type Toggle */}
        <div>
          <p className="text-[10px] text-[#9991c4] uppercase tracking-[0.15em] mb-2 font-bold">Transaction Type</p>
          <div className="flex bg-[#f8f7ff] rounded-xl p-1 border border-[#e8e4f8]">
            <button
              type="button"
              onClick={() => setType("Income")}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                type === "Income" ? "bg-[#7c3aed] text-white shadow-md" : "text-[#9991c4]"
              }`}
            >
              Income
            </button>
            <button
              type="button"
              onClick={() => setType("Expense")}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                type === "Expense" ? "bg-[#7c3aed] text-white shadow-md" : "text-[#9991c4]"
              }`}
            >
              Expense
            </button>
          </div>
        </div>

        {/* Category Select */}
        <div>
          <p className="text-[10px] text-[#9991c4] uppercase tracking-[0.15em] mb-2 font-bold">Category</p>
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-[#f8f7ff] border border-[#e8e4f8] rounded-xl px-4 py-3 text-[#1a1040] text-sm outline-none focus:border-[#7c3aed] transition-colors appearance-none"
          >
            <option value="">Select Category</option>
            {type === "Income" ? (
              <>
                <option value="Salary">Salary</option>
                <option value="Freelance">Freelance</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </>
            ) : (
              <>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Other">Other</option>
              </>
            )}
          </select>
        </div>

        {/* Amount Input */}
        <div>
          <p className="text-[10px] text-[#9991c4] uppercase tracking-[0.15em] mb-2 font-bold">Amount</p>
          <input
            required
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-[#f8f7ff] border border-[#e8e4f8] rounded-xl px-4 py-3 text-[#1a1040] text-sm outline-none focus:border-[#7c3aed] transition-colors"
          />
        </div>

        {/* Date Input */}
        <div>
          <p className="text-[10px] text-[#9991c4] uppercase tracking-[0.15em] mb-2 font-bold">Date</p>
          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-[#f8f7ff] border border-[#e8e4f8] rounded-xl px-4 py-3 text-[#1a1040] text-sm outline-none focus:border-[#7c3aed] transition-colors"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className="flex-[2] bg-[#7c3aed] text-white rounded-xl py-3 text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-200"
          >
            Add Transaction
          </button>
          <button
            type="button"
            onClick={() => setForm(false)}
            className="flex-1 bg-[#f8f7ff] text-[#9991c4] border border-[#e8e4f8] rounded-xl py-3 text-sm font-medium hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
