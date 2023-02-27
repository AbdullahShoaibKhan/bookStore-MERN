import { Button, TextField, FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NewBook() {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputs, setInputs] = useState();

  useEffect(() => {
    const fetchHandler = async () => {
      await fetch(`http://localhost:5000/books/${location.state.id}`)
        .then((res) => res.json())
        .then((data) => setInputs(data.book))
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
    fetchHandler();
  }, [location.state.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInput = {
      BookName: String(inputs.BookName),
      Author: String(inputs.Author),
      Genre: String(inputs.Genre),
      Desc: String(inputs.Desc),
      Price: Number(inputs.Price),
      PublishedBy: String(inputs.PublishedBy),
    };

    const sendData = async () => {
      await axios
        .put(`http://localhost:5000/books/${location.state.id}`, newInput)
        .then((res) => console.log(res.data))
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
    sendData().then(() => {
      navigate("/books");
    });
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      {inputs && (
        <form className="fromData" onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
            <FormLabel>Book Name</FormLabel>
            <TextField
              value={inputs.BookName}
              onChange={handleChange}
              name="BookName"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs.Author}
              onChange={handleChange}
              name="Author"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <FormLabel>Genre</FormLabel>
            <TextField
              value={inputs.Genre}
              onChange={handleChange}
              name="Genre"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <FormLabel>Desc</FormLabel>
            <TextField
              value={inputs.Desc}
              onChange={handleChange}
              name="Desc"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs.Price}
              onChange={handleChange}
              name="Price"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <FormLabel>Published By</FormLabel>
            <TextField
              value={inputs.PublishedBy}
              onChange={handleChange}
              name="PublishedBy"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <Button type="submit">Add Book</Button>
          </Box>
        </form>
      )}
    </div>
  );
}
