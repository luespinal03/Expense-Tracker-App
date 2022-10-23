
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

// function below is handling the creation of the expense item as a whole
const ExpenseItem = (props) => {

    // must be called inside component functions
    // convention is set the name of something that represents the value and something that updates the value
    // when the app gets initialized for the first time, w.e props.title is its whats being displayed initially. Once the Change Title button gets clicked it gets updated to w.e setTitle is(in this case 'Updated').
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    // function handling what happens when the click occurs, we creaete the function and put the pointer on the onCLick element on the desired button.
    // name functions with Handler at the end so its clear that it is a function that is attached to an event listener. So we know its not a function being called by us and instead is triggered by an event.
    // This function updates the title via setTitle, when onClick on button get triggered through function clickHandler
    const clickHandler = () => {
        // Updates title to w.e its in the ()
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;