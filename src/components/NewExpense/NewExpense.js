import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpesnseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    props.onrec(expenseData);
    setIsEditing(false);
  };

  const openform = () => {
    setIsEditing(true);
  };
  const closeForm = () => {
    setIsEditing(false);
  };
  let toShow = <button onClick={openform}> new expenses</button>;
  if (isEditing) {
    toShow = (
      <ExpenseForm
        onSaveExpenseData={saveExpesnseDataHandler}
        onCancel={closeForm}
      ></ExpenseForm>
    );
  }

  return <div className="new-expense">{toShow}</div>;
};

export default NewExpense;
