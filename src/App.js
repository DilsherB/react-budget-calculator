import './App.css';
import Form from './components/Form';
import Alert from './components/Alert';
import List from './components/List';
import {v4} from 'uuid'
import { useState } from 'react';

const expenseList = [
  { id: v4(), name: 'Item 1', amount: 500 },
  { id: v4(), name: 'Item 2', amount: 1000 },
  { id: v4(), name: 'Item 3', amount: 1500 },
]

function App() {
  const [expenses, setExpenses] = useState(expenseList)

  return (
    <>
      <h1>React App</h1>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className='App'>
        <Form />
        <List list={expenses}/>
      </main>
      <h1>Total Spendings<span className='total'>
        {' '}PKR: {expenses.reduce((acc, cur)=>{return acc+=cur.amount},0)}
      </span></h1>
    </>
  );
}

export default App;
