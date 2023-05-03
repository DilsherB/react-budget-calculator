import React from 'react';
import { MdSend } from 'react-icons/md';

const Form = (props) => {
  const {
    expense, amount, handleExpense, handleAmount, handleSubmit
  } = props;

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-center form">
        <div className="form-group">
          <label htmlFor="expense" className="formElement">
            Expense
            <input
              type="text"
              placeholder="e.g. rent"
              className="form-control"
              id="expense"
              name="expense"
              value={expense}
              onChange={handleExpense}
            />
          </label>
          <label htmlFor="amount formElement">
            Amount
            <input
              type="number"
              placeholder="e.g. 500"
              className="form-control"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleAmount}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-success formElement">
          Submit <MdSend />
        </button>
      </div>
    </form>
  );
};

export default Form;
