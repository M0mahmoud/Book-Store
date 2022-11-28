import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook } from "../../store/bookSlice";
import "../book.css";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
const BookContainer = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.book);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const getBookID = (id) => {
    const selectedBook = books.find((book) => book.id === id);
    setSelectedBook((prev) => {
      return {
        ...prev,
        ...selectedBook,
      };
    });
  };

  return (
    <>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
            dispatch={dispatch}
            getBookID={getBookID}
          />
        </div>
        <div className="col side-line">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </>
  );
};

export default BookContainer;
