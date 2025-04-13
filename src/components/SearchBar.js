import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <label>
        Search Expenses
        <input
          type="text"
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default SearchBar;