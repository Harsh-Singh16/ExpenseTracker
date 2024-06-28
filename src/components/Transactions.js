import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStates'

const Transactions = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);


    return (

        <li className={transaction.amount < 0 ? "minus" : "plus"} >
            {transaction.text} <span>{transaction.amount}Rs</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transactions
