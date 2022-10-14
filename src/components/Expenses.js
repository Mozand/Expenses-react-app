import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const getYear = (data) => {
    setYear(data);
  };
  const filtered = props.items.filter((expense) => {
    return year === expense.date.getFullYear().toString();
  });

  let expenseContent = <p>No Expenses For Year: {year}</p>;

  if (filtered.length > 0) {
    expenseContent = filtered.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onReceive={getYear}></ExpenseFilter>
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
