import axios from "axios";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useBook } from "../context/StateContext";
import { NavAdd, NavContainer, NavLogo, NavSearch, NavWrapper } from "./styles";

const Navbar = () => {
  const { setBooks } = useBook();
  const [book, setBook] = useState("");

  const handleKey = async (e) => {
    
    if (e.keyCode === 13 && book.length) {
      e.preventDefault();

      const { data } = await axios.get(
        `http://localhost:5000/books/search?book=${book}`
      );
      setBooks(data);
      setBook('');
    }
  };
  if (book.length < 1) {
  }

  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo>Book Shop</NavLogo>
        <NavSearch>
          <BsSearch />
          <input
            type="text"
            value={book}
            placeholder="Search for books"
            autoFocus
            onKeyDown={(e) => handleKey(e)}
            onChange={(e) => setBook(e.target.value)}
          />
        </NavSearch>
        <Link to="/addBook">
        <NavAdd title="Add book">
          <MdAdd />
        </NavAdd>
        </Link>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
