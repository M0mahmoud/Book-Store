import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook } from "../../store/bookSlice";

import "../book.css";
import BooksList from "./BooksList";

const BookContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.book);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <div className="row bt-5">
        <div className="col-lg">
          <BooksList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  );
};

export default BookContainer;
