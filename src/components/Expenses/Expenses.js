import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react'

const Expenses = (props) => {
    console.log(props)

    const [filteredYear, setFilteredYear] = useState('2020');

    // this function is taking the value of selectedYear (the year the user selected) and passing it to setFilteredYear which is then changing the value of filteredYear via useState.
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // function below is in charge of grabbing each item and comparing their year. If the year in the individual item matches the filteredYear aka year selected by the user then it will render on the page.
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>

            <Card className="expenses">
                {/* passing filterChangeHandler via props down to ExpensesFilter */}
                {/* passing filteredYear via props down to ExpensesFilter */}
                <ExpensesFilter
                    selected={filteredYear} onFilterChange={filterChangeHandler} />

                {/* we are currently passing items in through props. We ar then mapping them so we can reach every single one of them. Then we are setting each expense into the component <ExpenseItem/> as props as well in form of title, amount, and date */}
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        // individual id's are better than index as keys
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;