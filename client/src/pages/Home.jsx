import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FcEditImage } from "react-icons/fc";
import {
  BookContainer,
  BookImg,
  BookTitle,
  BookWrapper,
  HomeBtnContainer,
  HomeContainer,
  HomeWrapper,
} from "./styles";
import { Link } from "react-router-dom";
import { useBook } from "../context/StateContext";

const Home = () => {
  const { books, setBooks } = useBook();
  const handleDelete = async (id) => {
    try {
      await axios
        .delete("http://localhost:5000/books/" + id)
        .then(window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/books");
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, [setBooks]);

  return (
    <HomeContainer>
      <HomeWrapper>
        <BookContainer>
          {books.map((book) => (
            <BookWrapper key={book.id}>
              {book.cover && (
                <BookImg
                  src={process.env.PUBLIC_URL + `/${book.cover}`}
                  alt={book.title}
                />
              )}
              <span>
                <BookTitle>{book.title}</BookTitle>
                <p>{book.desc}</p>
                <b>${book.price}</b>
                <HomeBtnContainer>
                  <AiTwotoneDelete
                    title="Delete"
                    onClick={() => handleDelete(book.id)}
                  />

                  <Link to={`/updateBook/${book.id}`}>
                    <FaEdit title="update" />
                  </Link>
                </HomeBtnContainer>
              </span>
            </BookWrapper>
          ))}
        </BookContainer>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
