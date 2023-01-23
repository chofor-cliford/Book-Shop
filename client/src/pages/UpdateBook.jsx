import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
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

const UpdateBook = () => {
  const [book, setBook] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();
  const _id = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios
        .patch("http://localhost:5000/books/" + _id, book)
        .then(navigate("/"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/book/${_id}`);
        setBook({
          title: data[0].title,
          desc: data[0].desc,
          price: data[0].price,
          cover: data[0].cover,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, [_id]);

  return (
    <AddBookContainer>
      <AddTitle>Update the Book</AddTitle>
      <AddForm>
        <AddInput
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={book.title}
        />
        <AddInput
          type="text"
          name="desc"
          onChange={handleChange}
          placeholder="desc"
          value={book.desc}
        />
        <AddInput
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="price"
          value={book.price}
        />
        <AddInput
          type="text"
          name="cover"
          onChange={handleChange}
          placeholder="name e.g book1.jpg"
          value={book.cover}
        />
      </AddForm>
      <AddBtn onClick={handleClick}>Add</AddBtn>
    </AddBookContainer>
  );
};

export default UpdateBook;
