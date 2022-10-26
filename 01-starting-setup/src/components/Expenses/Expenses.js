import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import React, {useState} from "react"


function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    // console.log(props.items[0].date.getFullYear() == filteredYear)


    return (
        <Card className="expenses">
            <h2>{filteredYear}</h2>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* { for(let i=0; i<props.items.length; i++)} */}
            <ExpenseItem
                title={props.items[0].title}
                date={props.items[0].date}
                amount={props.items[0].amount}
                filterYear={filteredYear}
            />
            {button}
            <ExpenseItem
                title={props.items[1].title}
                date={props.items[1].date}
                amount={props.items[1].amount}
                filterYear={filteredYear}
            />
            <ExpenseItem
                title={props.items[2].title}
                date={props.items[2].date}
                amount={props.items[2].amount}
                filterYear={filteredYear}
            />
            <ExpenseItem
                title={props.items[3].title}
                date={props.items[3].date}
                amount={props.items[3].amount}
                filterYear={filteredYear}
            />
            <ExpenseItem
                title={props.items[4].title}
                date={props.items[4].date}
                amount={props.items[4].amount}
                filterYear={filteredYear}
            />
        </Card>
    )
}

export default Expenses;
