import React, { useState } from "react";
import "./Car.css";
const Book = (props) => {
  const [bookName, setBookName] = useState("");
  function fetchBookHandler() {
    fetch("http://localhost:8074/getbyid/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedBooks = data.name;
        setBookName(transformedBooks);
      });
   
  }
  return (
    <div>
      <h2>{fetchBookHandler}</h2>
    <h2>{bookName}</h2>
    </div>
  );
};
export default Book;
