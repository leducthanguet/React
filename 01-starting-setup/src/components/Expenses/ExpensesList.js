import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {

    if(props.items.length===0){
        return (
            <ul className="expenses-list__fallback">
                No Expense found!!!
            </ul>
        )
    }
    else{
        return (
            <ul className="expenses-list">
                {
                    props.items.map((expense) => (
                                    <ExpenseItem
                                    key={expense.id} 
                                    title={expense.title}
                                    date={expense.date}
                                    amount={expense.amount}
                                    />
                                    )
                                )
                }
            </ul>
        )
    }
}

export default ExpensesList;
