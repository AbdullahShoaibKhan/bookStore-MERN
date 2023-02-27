import React, { useEffect, useState } from "react";
import Book from "../book/Book.jsx";
import axios from "axios";

//URL to find all the book in store.
const URL = "http://localhost:5000/books";

//funciton in Books which is triggered in useEffect hook to fetch books from database
const fetchHandler = async () => {
  return await axios
    .get(URL, { cache: "no-cache" })
    .then((res) => res.data)
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

const Books = () => {
  const [books, setBooks] = useState("");
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.book));
  }, []);

  return (
    <div className="container">
      <>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </>
    </div>
  );
};
export default Books;
