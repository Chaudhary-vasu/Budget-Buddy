import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from 'react';

function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title);

  const ClickHandler = () => {
    setTitle("Updated!");
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} ></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
      <button onClick = {ClickHandler} >Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
