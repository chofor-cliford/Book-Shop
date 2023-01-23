import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  AddBookContainer,
  AddBtn,
  AddForm,
  AddInput,
  AddTitle,
} from "./styles";

const initialState = {
  title: "",
  desc: "",
  price: "",
  cover: "",
};

const AddBook = () => {
  const [book, setBook] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/books", book).then(navigate("/"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddBookContainer>
      <AddTitle>Add New Book</AddTitle>
      <AddForm>
        <AddInput
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
        />
        <AddInput
          type="text"
          name="desc"
          onChange={handleChange}
          placeholder="desc"
        />
        <AddInput
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="price"
        />
        <AddInput
          type="text"
          name="cover"
          onChange={handleChange}
          placeholder="name e.g book1.jpg"
        />
      </AddForm>
      <AddBtn onClick={handleClick}>Add</AddBtn>
    </AddBookContainer>
  );
};

export default AddBook;
