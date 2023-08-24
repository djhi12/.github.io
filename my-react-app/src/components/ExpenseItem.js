import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <div className="expense-item container">
            <div className='row'>
                <ExpenseDate date={props.date} />
                <div className='expense-item_description col-sm'>
                    <h2>{props.title}</h2>
                </div>

                <div className='expense-item_price col-sm'>
                    <div>{props.amount}</div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;