import "./App.css";
import { v4 } from "uuid";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Alert from "./components/Alert";
import List from "./components/List";

// const expenseList = [
//   { id: v4(), name: 'Rento of the home', amount: 500 },
//   { id: v4(), name: 'Installment of car', amount: 1000 },
//   { id: v4(), name: 'Electricity bill for the month', amount: 1500 },
// ];
const expenseList = JSON.parse(localStorage.getItem("budgetItems")) || [];

function App() {
  const [expenses, setExpenses] = useState(expenseList);
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    localStorage.setItem("budgetItems", JSON.stringify(expenses), [expenses]);
  });

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
    }, 4000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense !== "" && amount > 0) {
      if (edit) {
        const tempItem = expenses.map((item) => {
          return item.id === id
            ? { ...item, name: expense, amount: parseInt(amount, 10) }
            : item;
        });
        setExpenses(tempItem);
        setEdit(false);
        handleAlert({ type: "success", text: "Item successfully updated" });
      } else {
        const newExpense = {
          id: v4(),
          name: expense,
          amount: parseInt(amount, 10),
        };
        setExpenses([...expenses, newExpense]);
        handleAlert({ type: "success", text: "Item successfully added" });
      }
      setExpense("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Please enter description and amount",
      });
    }
  };
  const handleClearAll = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All items successfully deleted" });
  };
  const handleEdit = (id) => {
    const itemToUpdate = expenses.find((item) => item.id === id);
    const { name, amount } = itemToUpdate;
    setExpense(name);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  const handleDelete = (id) => {
    const filteredExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(filteredExpenses);
    handleAlert({ type: "danger", text: "Item successfully deleted" });
  };
  const currency = "PKR";
  return (
    <>
      <h1 className="text-center">
        React Budget Calculator
        <br />
        <span className="fs-6">
          (using Hooks, Props, localStorage, map(), filter(), reduce(), find())
        </span>
      </h1>
      <div className="d-flex justify-content-center text-center">
        {alert.show && <Alert type={alert.type} text={alert.text} />}
      </div>
      <main className="App">
        <Form
          expense={expense}
          amount={amount}
          handleExpense={handleExpense}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <List
          list={expenses}
          currency={currency}
          clearAll={handleClearAll}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
      <h1 className="text-center">
        Total Spendings
        <span className="total">
          {" "}
          {currency}:{" "}
          {expenses.reduce((acc, cur) => {
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
