import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props){
    function saveExpenseDateHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    
    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>
    </div>
    )
}
export default NewExpense;