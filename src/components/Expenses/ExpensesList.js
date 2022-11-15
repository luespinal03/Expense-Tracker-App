import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = ({ filteredExpenses }) => {


    {/* we are currently passing items in through props. We are then mapping them so we can reach every single one of them. Then we are setting each expense into the component <ExpenseItem/> as props as well in form of title, amount, and date */ }
    {/* if filteredExpenses.length equal to 0? yes? then render whats right after the ? mark. if not then render the Expense items corresponding to the year selected */ }
    if (filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }



    return (<ul classname="expenses-list">{
        filteredExpenses.map((expense) => (
            <ExpenseItem
                // individual id's are better than index as keys
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>
    );
};

export default ExpensesList