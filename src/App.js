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
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const handleExpense = (e) => {
    setExpense(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense !== "" && amount > 0) {
      const newExpense = { id: v4(), name: expense, amount: parseInt(amount, 10) };
      setExpenses([...expenses, newExpense]);
      handleAlert({ type: 'success', text: 'Item successfully added' });
      setExpense("");
      setAmount("");
    } else {
      handleAlert({ type: 'danger', text: 'Please enter description and amount' });
    }
  };
  const currency = "PKR";
  return (
    <>
      <h1>React App</h1>
      <h1>Budget Calculator</h1>
      <div className="container">
        {alert.show && <Alert type={alert.type} text={alert.text} />}
      </div>
      <main className="App">
        <Form
          expense={expense}
          amount={amount}
          handleExpense={handleExpense}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <List list={expenses} currency={currency} />
      </main>
      <h1>
        Total Spendings
        <span className="total">
          {' '}
          {currency}:
          {' '}
          { expenses.reduce((acc, cur) => {
            let ret = acc;
            ret += parseInt(cur.amount, 10);
            return ret;
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
