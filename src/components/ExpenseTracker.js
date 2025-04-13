import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import SearchBar from './SearchBar';
import './ExpenseTracker.css';

function ExpenseTracker() {
  // Sample initial expenses
  const initialExpenses = [
    { id: 1, name: 'Groceries', amount: 1500.00, category: 'Food', description: 'Weekly grocery shopping' },
    { id: 2, name: 'Electric Bill', amount: 500.00, category: 'Utilities', description: 'Monthly electricity payment' },
    { id: 3, name: 'Drinks', amount: 4000.00, category: 'Entertainment', description: 'Weekend' },
    { id: 4, name: 'Fare', amount: 2500.00, category: 'Transportation', description: 'Monthly Fare' },
    { id: 5, name: 'Internet', amount: 2000.00, category: 'Utilities', description: 'Monthly internet service' }
  ];

  // State management
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // Add new expense
  const addExpense = (newExpense) => {
    const expenseWithId = {
      ...newExpense,
      id: expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1,
    };
    setExpenses([...expenses, expenseWithId]);
  };

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Handle sort
  const handleSort = (field) => {
    if (sortField === field) {
     
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
    
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Handle delete
  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(expense => 
    expense.name.toLowerCase().includes(searchTerm) || 
    expense.description.toLowerCase().includes(searchTerm)
  );

  // Sort expenses if sort field is set
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortField) return 0;
    
    const fieldA = a[sortField].toString().toLowerCase();
    const fieldB = b[sortField].toString().toLowerCase();
    
    if (sortDirection === 'asc') {
      return fieldA.localeCompare(fieldB);
    } else {
      return fieldB.localeCompare(fieldA);
    }
  });

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      
      <ExpenseForm onAddExpense={addExpense} />
      
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      
      <ExpenseTable 
        expenses={sortedExpenses} 
        onDelete={handleDelete}
        onSort={handleSort}
        sortField={sortField}
        sortDirection={sortDirection}
      />
    </div>
  );
}

export default ExpenseTracker;