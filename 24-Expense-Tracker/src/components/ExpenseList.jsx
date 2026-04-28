import { useContext } from "react"
import { expenseContextData } from "../context/ExpenseContext"
import ExpenseItem from "./ExpenseItem"

const ExpenseList = () => {
    const { transaction } = useContext(expenseContextData)

    if (transaction.length === 0) {
        return (
            <div className="text-center mt-8">
                <p className="text-2xl font-bold">No transactions yet</p>
            </div>
        )
    }
    return (
        <div className="bg-black">
            <h2 className="text-2xl font-bold text-white mb-4">Transaction List</h2>
            {transaction.map((item, index) => {
                return <div key={index}>
                    <ExpenseItem item={item} />
                </div>
            })
            }
        </div>
    )
}

export default ExpenseList
