import React from "react";
import { useNavigate } from "react-router-dom";
import { bookInfo } from "../../store/bookSlice";

const BooksList = ({ isLoading, books, isLoggedIn, dispatch, deleteBook }) => {
  const navigate = useNavigate();
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                dispatch(bookInfo(book));
                navigate(`/bookInfo/${book.id}`);
              }}
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
      <h2 className="my-3">Books List</h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul className="list-group">{dataBookList}</ul>
      )}
    </div>
  );
};

export default BooksList;
