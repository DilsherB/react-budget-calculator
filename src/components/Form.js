import React from 'react';
import { MdSend } from 'react-icons/md';

const Form = () => (
  <form className="container">
    <div className="form-center">
      <div className="form-group">
        <label htmlFor="expense">
          Expense
          <input type="text" placeholder="e.g. rent" className="form-control" id="expense" name="expense" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="amount">
          Amount
          <input type="text" placeholder="e.g. 500" className="form-control" id="amount" name="amount" />
        </label>
      </div>
      <button type="submit" className="btn btn-success">
        Submit <MdSend />
      </button>
    </div>
  </form>
);

export default Form;
