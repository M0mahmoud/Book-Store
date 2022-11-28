import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "../store/bookSlice";

const AddBook = () => {
  const titleRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      desc: descRef.current.value,
    };
    dispatch(insertBook(data));

    //Reset
    titleRef.current.value = null;
    priceRef.current.value = null;
    descRef.current.value = null;
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              ref={titleRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              ref={priceRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="Description"
              rows="3"
              required
              ref={descRef}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
