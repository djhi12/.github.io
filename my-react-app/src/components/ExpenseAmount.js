import './ExpenseAmount.css';

function ExpenseAmount(props) {

    return (
        <div className='expense-item_price col-sm align-bottom bg-primary rounded'>
            <div>{props.amount}</div>
        </div>
    )
}


export default ExpenseAmount;