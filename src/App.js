import './App.css';
import { v4 } from 'uuid';
import { useState } from 'react';
import Form from './components/Form';
import Alert from './components/Alert';
import List from './components/List';

const expenseList = [
  { id: v4(), name: 'Rento of the home', amount: 500 },
  { id: v4(), name: 'Installment of car', amount: 1000 },
  { id: v4(), name: 'Electricity bill for the month', amount: 1500 },
];

function App() {
  const [expenses, setExpenses] = useState(expenseList);
  return (
    <>
      <h1>React App</h1>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <Form />
        <List list={expenses} />
      </main>
      <h1>
        Total Spendings
        <span className="total">
          {' '}
          PKR:
          {' '}
          { expenses.reduce((acc, cur) => {
            let ret = acc;
            ret += cur.amount;
            return ret;
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
