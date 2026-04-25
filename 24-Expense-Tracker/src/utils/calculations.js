export const calculateIncome = (transactions) => {
    let Income = 0;
    transactions.forEach((item) => {
        if(item.type==="income"){
            Income+=item.amount
        }
    })
    return Income;
}


export const calculateExpense = (transactions) => {
    let Expense = 0;
    transactions.forEach((item) => {
        if(item.type==="expense"){
            Expense+=item.amount
        }
    })
    return Expense;
}

export const calculateBalance = (transactions) => {
    return calculateIncome(transactions)-calculateExpense(transactions)
}