import React from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const SortComponent = ({ sortBy, onSortChange }) => {
  return (
    <div className="sort-buttons">
      {sortBy === 'asc' ? (
        <button className="btn btn-primary me-2" onClick={() => onSortChange('desc')}>
          Sort by Price  <AiFillCaretUp />
        </button>
      ) : (
        <button className="btn btn-primary me-2" onClick={() => onSortChange('asc')}>
          Sort by Price <AiFillCaretDown />
        </button>
      )}
    </div>
  );
};

export default SortComponent;