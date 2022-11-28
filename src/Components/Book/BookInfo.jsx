import React from "react";
import { useSelector } from "react-redux";

const BookInfo = () => {
  const { oneBookInfo } = useSelector((state) => state.book);

  return (
    <div className="m-5 p-3 ">
      <h2 className="border-bottom mb-3 p-1">Book Details</h2>
      {Object.values(oneBookInfo) ? (
        <div className="p-1">
          <h4 className="fw-bold">Title: {oneBookInfo.title}</h4>
          <p className="fw-light">Description: {oneBookInfo.desc}</p>
          <p className="fst-italic">Price: {oneBookInfo.price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          "There is no book selected yet. Please select!"
        </div>
      )}
    </div>
  );
};

export default BookInfo;
