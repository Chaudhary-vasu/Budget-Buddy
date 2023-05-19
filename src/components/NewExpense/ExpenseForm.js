import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    
    // merging multiple useState into single useState
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler = (event) => {
         setEnteredTitle(event.target.value);

        // for merging multiple useState
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })    

        // better way to write.
        // setUserInput((prevState) => {
        //     return { ...prevState,enteredTitle:event.target.value };
        // });
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

         // for merging multiple useState
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })

         // better way to write.
        // setUserInput((prevState) => {
        //     return { ...prevState,enteredAmount:event.target.value };
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

         // for merging multiple useState
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })

        // better way to write.
        // setUserInput((prevState) => {
        //     return { ...prevState,enteredDate:event.target.value };
        // });
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        // console.log(expenseData)
        
        // For setting entered data in form as blank after form submit.
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    };

    const [addNewExpenseButton, setaddNewexpenseButton] = useState(false)
    const addNewExpenseHandler = () => {
        setaddNewexpenseButton(true);
    }
    const addNewExpenseHandlerFormHide = () => {
        setaddNewexpenseButton(false);
    }
    let addNewExpense = <button type = 'submit' onClick = {addNewExpenseHandler}>Add Expense</button>

    if (addNewExpenseButton == true){
        addNewExpense = <form onSubmit={submitHandler}>
            <div id = "add-new-expense" className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type = "text" value = {enteredTitle} onChange={titleChangeHandler}/> 
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type = "number" min="0.01" step="0.01" value = {enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type = "date" min="2019-01-01" max="2023-12-31" value = {enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type = 'submit' onClick = {addNewExpenseHandlerFormHide}>Cancel</button>
                <button type = 'submit' onClick = {addNewExpenseHandler}>Add Expense</button>
            </div>
            </form>
    }
    return (
        <div>
        {addNewExpense}
        </div>
    );
};
export default ExpenseForm;