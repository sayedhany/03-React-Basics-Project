import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, {useState} from "react";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  function clickHandler(){
    setTitle("updated");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler} >Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
