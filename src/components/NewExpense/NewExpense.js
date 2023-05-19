import './NewExpense.css';
// import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    //for child to parent component communication i.e. ExpenseForm => NewExpense
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };

        // for child to parent comm. NewExpense => App.js
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    };    

    return (<div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler} />
    </div>);
}
export default NewExpense;