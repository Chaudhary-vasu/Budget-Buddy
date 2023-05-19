import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 194.12,
    date: new Date(2023, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 15799.49, date: new Date(2023, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
     amount: 20094.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} >
      hello
      </Expenses>
    </div>
  );
}

export default App;
