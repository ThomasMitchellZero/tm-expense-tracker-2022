import React from "react";
import "./ExpenseDate.css";

//dates as written will not work, but I need to figure it out myself.

function ExpenseDate(props) {
  const fullDate = props.expenseData.date
  console.log(fullDate)
  const month = "Jan";
  const year = "2022";
  const date = "21";

  return (
    <div className="expense-date__3-part">
      <p className="expense-date__date">{date}</p>
      <div className="expense-date__month-year">
        <p className="expense-date__month">{month}</p>
        <p className="expense-date__year">{year}</p>
      </div>
    </div>
  );
}

export default ExpenseDate;
