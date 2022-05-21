import React from 'react';
import { useState } from 'react';
import './App.css';

import ExpenseDate from './components/Expenses/ExpenseDate';



function App() {

  const DUMMY_DATA = [
    {date: new Date(2022, 1, 21),
    amount: 322,
    notes: "New Bengal Cat"}
  ]

  const [expenseData, setExpenseData] = useState(DUMMY_DATA);
  

  return (
    <div className="App">
      <p>This is the shape of things to come</p>
      <ExpenseDate expenseData={expenseData}/>
    </div>
  );
}

export default App; 
