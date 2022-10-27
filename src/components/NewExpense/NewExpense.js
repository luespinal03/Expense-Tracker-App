import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    console.log(props)
    // function below is handling the new created data, being passed in up from ExpenseForm component
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        // here we are spreading the data object we collected from our user and adding it a random ID (kind of like open it to put a new piece of data in it???)
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random().toString() * 1000)
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };

    return (
        <div className='new-expense'>
            {/* naming convention, start with on so we know the value for this prop is a function that can be called inside the ExpenseForm component */}
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;