import React from 'react';
import './ExpenseTable.css';

function ExpenseTable({ expenses, onDelete, onSort, sortField, sortDirection }) {
  return (
    <div className="expense-table-container">
      <h2>Expenses</h2>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th 
              onClick={() => onSort('category')} 
              className={`sortable-header ${sortField === 'category' ? 'active-sort' : ''}`}
            >
              Category {sortField === 'category' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th 
              onClick={() => onSort('description')} 
              className={`sortable-header ${sortField === 'description' ? 'active-sort' : ''}`}
            >
              Description {sortField === 'description' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-expenses-message">
                No expenses found. Add a new expense or change your search criteria.
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>ksh{expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>
                  <button
                    onClick={() => onDelete(expense.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;