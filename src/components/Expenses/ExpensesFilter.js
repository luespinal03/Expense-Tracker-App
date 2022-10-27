import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    // this function is taking the value from the event (e) and assigning it to selectedYear then passing selectedYear UP towards onFilterChange function 
    const dropDownChangeHandler = (e) => {
        const selectedYear = e.target.value;
        props.onFilterChange(selectedYear)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                {/* create a onChange event listener into the <select></select> since the select tag is holding the options which will give us the selected value. onChange, execute {dropDownChangeHandler} */}
                {/* taking props.selected(holding the value of filteredYear) in as its default value that will change once it gets updated via setFilteredYear in useState */}
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;