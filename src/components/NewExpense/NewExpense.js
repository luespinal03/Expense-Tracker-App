import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = () => {

    // function below is handling the new created data, being passed in up from ExpenseForm component
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        // here we are spreading the data object we collected from our user and adding it a random ID
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() * 1000
        };
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