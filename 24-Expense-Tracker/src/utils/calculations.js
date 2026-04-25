const calculateIncome = (transactions) => {
    let Income = 0;
    transactions.forEach((item) => {
        if(item.type==="income"){
            Income+=item.amount
        }
    })
    return Income;
}


const calculateExpense = (transactions) => {
    let Expense = 0;
    transactions.forEach((item) => {
        if(item.type==="expense"){
            Expense+=item.amount
        }
    })
    return Expense;
}

const calculateBalance = () => {
    return calculateIncome(transaction)-calculateExpense(transactions)
}