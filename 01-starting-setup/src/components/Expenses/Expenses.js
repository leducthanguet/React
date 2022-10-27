import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter.js"
import ExpensesList from "./ExpensesList.js"
import ExpensesChart from "./ExpensesChart.js"
import React, {useState} from "react"


function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    // console.log(props.items[0].date.getFullYear() == filteredYear)
    const filteredExpense = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear;
    })
    console.log(filteredExpense);

    return (
        <Card className="expenses">
            <h2>{filteredYear}</h2>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart filteredExpense={filteredExpense} />
            <ExpensesList items={filteredExpense} />
            {/* {props.items.map( */}
            {/* {filteredExpense.length === 0 && <p>No expense found.</p>}
            {filteredExpense.length === 0 ? (<h>No expense found.</h>) : (
                filteredExpense.map(
                    (expense) => (
                        <ExpenseItem
                            key={expense.id} 
                            title={expense.title}
                            date={expense.date}
                            amount={expense.amount}
                            filterYear={filteredYear}
                        />
                    ))
                )
            } */}
            {/* {expenseItem} */}
            {/* <ExpenseItem
                title={props.items[0].title}
                date={props.items[0].date}
                amount={props.items[0].amount}
                filterYear={filteredYear}
            />
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
            /> */}
        </Card>
    )
}

export default Expenses;
