import './ExpensePrice.css';

function ExpensePrice(props) {

    return (
        <div className='expense-item_price col-sm align-bottom bg-primary rounded'>
            <div>{props.amount}</div>
        </div>
    )
}


export default ExpensePrice;