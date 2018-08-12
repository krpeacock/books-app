import React from "react";

export default ({ book }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <img src={`/static/${book.imageLink}`} />
    </div>
  );
};
