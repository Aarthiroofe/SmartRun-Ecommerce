import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {currentPage > 0 && (
        <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      )}

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={currentPage === index ? 'active' : ''}
          onClick={() => onPageChange(index)}
        >
          {index + 1}
        </button>
      ))}

      {currentPage < totalPages - 1 && (
        <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
