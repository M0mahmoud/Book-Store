import React from "react";

const BookInfo = ({ info }) => {
  return (
    <>
      <h2>Book Details</h2>
      {Object.values(info) ? (
        <div className="p-1">
          <p className="fw-bold">Title: {info.title}</p>
          <p className="fw-light">Description: {info.desc}</p>
          <p className="fst-italic">Price: {info.price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          "There is no book selected yet. Please select!"
        </div>
      )}
    </>
  );
};

export default BookInfo;
