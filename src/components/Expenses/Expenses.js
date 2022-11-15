import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
                    filteredYear={filteredYear}
                    filterChangeHandler={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList filteredExpenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;