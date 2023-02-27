import { Button, TextField, FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewBook() {
  const navigate = useNavigate();

  //setting initial state
  const [inputs, setInputs] = useState({
    BookName: "",
    Author: "",
    Genre: "",
    Desc: "",
    Price: "",
    PublishedBy: "",
  });

  //handles change in the input field
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //Data entered in input field stored in single object
  const newInput = {
    BookName: String(inputs.BookName),
    Author: String(inputs.Author),
    Genre: String(inputs.Genre),
    Desc: String(inputs.Desc),
    Price: Number(inputs.Price),
    PublishedBy: String(inputs.PublishedBy),
  };

  //post the data to backend and then navigate back to home page automatically.This function is called below in handleSubmit function
  const sendData = async () => {
    await axios
      .post("http://localhost:5000/books/add", newInput)
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

  //calls sendData function, which performs the post api call.
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
  };
  return (
    <div>
      <form className="fromData">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          // maxWidth={1000}
          sx={{
            width: {
              xs: 350, //   theme.breakpoints.up('xs')
              sm: 400, // theme.breakpoints.up('sm')
              md: 700, // theme.breakpoints.up('md')
              lg: 700, // theme.breakpoints.up('lg')
              xl: 700, // theme.breakpoints.up('xl')
            },
          }}
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
          <FormLabel>Description</FormLabel>
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
          <Button onClick={handleSubmit}>Add Book</Button>
        </Box>
      </form>
    </div>
  );
}
