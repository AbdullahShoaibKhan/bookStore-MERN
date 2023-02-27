import React from "react";
import "./book.css";
import { useNavigate } from "react-router-dom";

export default function Book(props) {
  console.log(props.book);
  const navigate = useNavigate();

  const { _id, BookName, Author, Genre, Desc, Price, PublishedBy } = props.book;

  console.log(Author, ":Author");

  return (
    <div className="card">
      <h3>{BookName}</h3>
      <p>Author : {Author}</p>
      <p>Genre : {Genre}</p>
      <p>Price : {Price}</p>
      <p>Published By : {PublishedBy}</p>
      <button
        className="btn"
        onClick={(e) =>
          navigate("/viewbook", {
            state: {
              id: _id,
              name: BookName,
              author: Author,
              genre: Genre,
              desc: Desc,
              price: Price,
              publishedBy: PublishedBy,
            },
          })
        }
      >
        View
      </button>
    </div>
  );
}
