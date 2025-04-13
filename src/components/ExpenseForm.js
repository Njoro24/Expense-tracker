import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: '',
    description: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!formData.name || !formData.amount || !formData.category) {
      alert('Please fill in all required fields');
      return;
    }

    // Create new expense
    const newExpense = {
      name: formData.name,
      amount: parseFloat(formData.amount),
      category: formData.category,
      description: formData.description
    };

   
    onAddExpense(newExpense);
    
    // Reset form
    setFormData({
      name: '',
      amount: '',
      category: '',
      description: ''
    });
  };

  return (
    <div className="expense-form-container">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label>
            Expense Name*
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Amount*
            <input
              type="number"
              name="amount"
              step="0.01"
              value={formData.amount}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Category*
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Utilities">Utilities</option>
              <option value="Housing">Housing</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Personal">Personal</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Description
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </label>
        </div>
        
        <button type="submit" className="submit-button">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;