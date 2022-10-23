import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('')
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

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};


export default ExpenseForm;