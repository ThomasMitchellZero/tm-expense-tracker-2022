import React from 'react';
import './App.css';

import ExpenseDate from './components/Expenses/ExpenseDate';

function App() {
  
  const months = ["Jan"]; 

  return (
    <div className="App">
      <p>This is the shape of things to come</p>
      <ExpenseDate/>
    </div>
  );
}

export default App; 
