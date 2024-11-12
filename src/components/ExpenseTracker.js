import React from 'react';
import Balance from '../utils/expenseFutures/Balance';
import IncomeOutcome from '../utils/expenseFutures/IncomeOutcome';
import TransactionForm from '../utils/expenseFutures/TransactionForm';
import TransactionHistory from '../utils/expenseFutures/TransactionHistory';  // Import the history component
import { ExpenseProvider } from '../context/ExpenseContext';
import '../styles/Global.css';

export const ExpenseTracker = () => {
  return (
    <React.Fragment>
      <ExpenseProvider>
        <h1>Expense Tracker</h1>
        <Balance />
        <IncomeOutcome />
        <TransactionForm />
        <TransactionHistory />  {/* Add the transaction history here */}
      </ExpenseProvider>
    </React.Fragment>
  );
};