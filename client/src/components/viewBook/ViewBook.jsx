import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./viewBook.css";

function ViewBook(props) {
  let navigate = useNavigate();
  const location = useLocation();

  //delete fucntion which performs the delete api call and location.state.id contains the "id" sent to it from route.
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:5000/books/${location.state.id}`)
      .then((res) => res.data)
      .then(() => {
        navigate("/books");
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
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

  return (
    <div>
      <div id="card">
        <h3>Title : {location.state.name}</h3>
        <p>Author : {location.state.author}</p>
        <p>Genre : {location.state.genre}</p>
        <p>Description : {location.state.desc}</p>
        <p>Price : {location.state.price}</p>
        <p>Published By : {location.state.publishedBy}</p>

        <button onClick={handleDelete}>Delete</button>
        <button
          onClick={(e) =>
            navigate("/editbook", { state: { id: location.state.id } })
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
}
export default ViewBook;
