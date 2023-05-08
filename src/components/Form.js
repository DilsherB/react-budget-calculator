import { MdSend } from "react-icons/md";

const Form = (props) => {
  const {
    expense,
    amount,
    handleExpense,
    handleAmount,
    handleSubmit,
    edit,
    expenseRef,
  } = props;

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-center form">
        <div className="form-group">
          <label htmlFor="expense" className="formElement">
            Expense<span className="text-danger">*</span>
            <input
              type="text"
              placeholder="e.g. rent"
              className="form-control"
              id="expense"
              name="expense"
              pattern="^[a-zA-Z][a-zA-Z0-9.,$;]*$"
              onInvalid={(e) => {
                e.target.setCustomValidity(
                  "Expense must start with alphabet only"
                );
              }}
              ref={expenseRef}
              onInput={(e) => e.target.setCustomValidity("")}
              value={expense}
              onChange={handleExpense}
            />
            <span>Expense can start only with letters</span>
          </label>
          <label htmlFor="amount formElement">
            Amount<span className="text-danger">*</span>
            <input
              type="number"
              placeholder="e.g. 500"
              className="form-control"
              id="amount"
              name="amount"
              onInvalid={(e) => {
                e.target.setCustomValidity(
                  "Please enter amount in digits only"
                );
              }}
              onInput={(e) => e.target.setCustomValidity("")}
              value={amount}
              onChange={handleAmount}
            />
            <span>Enter amount for the expense here</span>
          </label>
        </div>
        <button type="submit" className="btn btn-success formElement">
          {edit ? "Update" : "Submit"} <MdSend className="fs-4 ms-2 pb-1" />
        </button>
      </div>
    </form>
  );
};

export default Form;
