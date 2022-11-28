import React from "react";

const BooksList = ({
  isLoading,
  books,
  isLoggedIn,
  dispatch,
  deleteBook,
  getBookID,
}) => {
  const deleteBookHandler = (book) => {
    dispatch(deleteBook(book))
      .unwrap()
      .then((res) => {
        console.log(res);
      });
  };

  // If books is null write it by [books && books.map=>....]
  const dataBookList =
    books.length > 0 ? (
      books.map((book) => (
        <li
          className="list-group-item d-flex  justify-content-between align-items-center"
          key={book.id}
        >
          <div>{book.title}</div>
          <div className="btn-group" role="group">
            {/* onClick={()=>{dispatch(bookInfo(book))}} */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => getBookID(book.id)}
            >
              Read
            </button>
            <button
              type="button"
              className="btn btn-danger"
              disabled={!isLoggedIn}
              onClick={() => deleteBookHandler(book)}
            >
              Delete
            </button>
          </div>
        </li>
      ))
    ) : (
      <h4>No Books Available!</h4>
    );

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul className="list-group">{dataBookList}</ul>
      )}
    </div>
  );
};

export default BooksList;
