import React from 'react';

export const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log('totalItems:', totalItems);
  console.log('itemsPerPage:', itemsPerPage);

  const remainingBlogs = totalItems % itemsPerPage;
  console.log('remainingBlogs:', remainingBlogs);

  const adjustedItemsPerPage = remainingBlogs < itemsPerPage && pageNumbers.length > 1 ? remainingBlogs : itemsPerPage;
  console.log('adjustedItemsPerPage:', adjustedItemsPerPage);

  return (
    <nav>
      <ul className="pagination flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item mx-2">
            <a
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? 'active bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded'}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      {currentPage === pageNumbers.length && remainingBlogs > 0 && (
        <p className="text-center mt-4">
          Showing {itemsPerPage} of {totalItems} blog posts
        </p>
      )}
      {currentPage !== pageNumbers.length && remainingBlogs > 0 && (
        <p className="text-center mt-4">
          Showing {itemsPerPage} of {totalItems} blog posts
        </p>
      )}
    </nav>
  );
};
