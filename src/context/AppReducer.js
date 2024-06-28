export default (state, action) => {
    switch (action.type) {

        case 'ADD_TRANSACTION':
            return {
                ...state,
                // transactions: state.transactions.push(action.payload)
                transactions: [action.payload, ...state.transactions]
            }

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}