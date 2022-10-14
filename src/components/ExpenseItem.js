import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const update = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={update}>change</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
