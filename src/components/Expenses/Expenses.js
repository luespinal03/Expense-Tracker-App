import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    // this function is taking the value of selectedYear (the year the user selected) and passing it to setFilteredYear which is then changing the value of filteredYear via useState.
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    return (
        <div>

            <Card className="expenses">
                {/* passing filterChangeHandler via props down to ExpensesFilter */}
                {/* passing filteredYear via props down to ExpensesFilter */}
                <ExpensesFilter
                    selected={filteredYear} onFilterChange={filterChangeHandler} />
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;