import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const getYear = (data) => {
    setYear(data);
  };
  const filtered = props.items.filter((expense) => {
    return year === expense.date.getFullYear().toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onReceive={getYear}></ExpenseFilter>
        <ExpensesChart expenses={filtered}></ExpensesChart>
        <ExpensesList items={filtered} />
      </Card>
    </div>
  );
};

export default Expenses;
