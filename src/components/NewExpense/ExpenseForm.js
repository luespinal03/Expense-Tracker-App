import './ExpenseForm.css'
import { useState } from 'react';

// Here we are passing onSaveExpenseDataHandler as a props. Function in charge of spreading the current information that was collected based on user input, adding an ID to our newly created expense
const ExpenseForm = (props) => {
    console.log(props);

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');


    // handling the title based on what the user inputs
    const titleChangeHandler = (e) => {
        // console.log(e);
        setEnteredTitle(e.target.value);
    }

    // handling the amount based on what the user inputs
    const amountChangeHandler = (e) => {
        // console.log(e)
        setEnteredAmount(e.target.value);
    }

    // handling the date based on what the user inputs
    const dateChangeHandler = (e) => {
        // console.log(e);
        setenteredDate(e.target.value);
    }




    /*********************
        SUBMIT HANDLER
    *********************/
    // prevent default from the event (full page refresh)
    const submitHandler = (e) => {
        e.preventDefault();
        // creating a new expense based on user input data
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        // here we are passing our user collected data back up to onSaveExpenseData via props (refer to line 23 in NewExpense.js)
        props.onSaveExpenseData(expenseData);
        // 3 lines of code below this comment are to reset the input values to empty after the form gets submitted
        setEnteredTitle('')
        setEnteredAmount('')
        setenteredDate('')
    }
    /*********************
        SUBMIT HANDLER
     *********************/


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* value is what the input will begin with, in this case it will start off as empty */}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    {/* value is what the input will begin with, in this case it will start off as empty */}
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    {/* value is what the input will begin with, in this case it will start off as empty */}
                    <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.stopEditingHandler} className='cancel-button'>Cancel</button>
                <button type="submit" className='add-expense-button'>Add Expense</button>
            </div>
        </form>
    );
};


export default ExpenseForm;