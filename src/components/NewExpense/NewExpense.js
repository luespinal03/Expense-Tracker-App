import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    console.log(props)

    const [isEditing, setisEditing] = useState(false);
    // function below is handling the new created data, being passed in up from ExpenseForm component
    // the parameter enteredExpenseData on the line below is holding the information of the newly created expense item thats being passed up from line 43 in ExpenseForm.js
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        // here we are spreading the data object we collected from our user and adding it a random ID (kind of like open it to put a new piece of data in it???)
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random().toString() * 1000)
        };
        // on line below we are passing the 'no-shit' ready to go newly created expense item as (expenseData) into the function onAddExpense via props (App.js line 51)
        props.onAddExpense(expenseData);
        setisEditing(false)

        console.log(expenseData);
    };



    const startEditingHandler = () => {
        setisEditing(true);
    };

    const stopEditingHandler = () => {
        setisEditing(false);
    };

    return (
        <div className='new-expense'>
            {/* naming convention, start with on so we know the value for this prop is a function that can be called inside the ExpenseForm component */}
            {/* if isEditing is set to false then render the button */}
            {!isEditing && <button onClick={startEditingHandler} className='add-expense-button'>Add New Expense</button>}
            {/* if isEditing is set to true then render the form below */}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} isEditing={isEditing} stopEditingHandler={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;