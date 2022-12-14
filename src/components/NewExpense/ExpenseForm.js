import "./ExpenseForm.css";
import react, { useState } from "react";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  // })

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState, enteredTitle: event.target.value,}
    // });
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState, enteredAmount: event.target.value,}
    // });
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState, enteredDate: event.target.value,}
    // });
  }
  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }
  return (
    // enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            id="title"
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            id="amount"
            type="nnumber"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
