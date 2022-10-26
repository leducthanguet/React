import React, {useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)
    // if(typeof title == "undefined"){
    //   console.log("Hello");

    // } 
    // else {
    //   console.log(title);
    // }
    // console.log(title)
    const clickHandler = () => {
      setTitle("Updated!!!")
      console.log(title)
    }

    if(props.date.getFullYear()==props.filterYear){
      return (
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
          </div>
          <button onClick={clickHandler}>Change Title</button>
        </Card>
      );
    }
    else{
      return (
        <div></div>
      )
    }

  }
  
export default ExpenseItem;
  