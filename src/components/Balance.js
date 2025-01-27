import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStates'

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions)
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{total}Rs</h1>
        </>
    )
}

export default Balance
