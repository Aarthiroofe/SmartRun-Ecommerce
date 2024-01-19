import React from 'react';

const FilterComponent = ({ selectedCategory, uniqueCategories, onCategoryChange, searchInput, onSearchInputChange }) => {
  return (
    <div className="row">
    <div className="col-12 col-md-6">
      <select
        className="form-control mb-4"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All Categories</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    <div className="col-12 col-md-6">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name..."
        value={searchInput}
        onChange={(e) => onSearchInputChange(e.target.value)}
      />
    </div>
  </div>
  );
};

export default FilterComponent;