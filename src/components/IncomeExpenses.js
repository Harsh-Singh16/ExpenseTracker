import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStates'

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const posAmounts = transactions.map(transaction => transaction.amount > 0 ? transaction.amount : 0);
    const negAmounts = transactions.map(transaction => transaction.amount < 0 ? transaction.amount : 0);
    const income = posAmounts.reduce((acc, item) => (acc += item), 0);
    const expense = negAmounts.reduce((acc, item) => (acc += item), 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}Rs</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{Math.abs(expense)}Rs</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
