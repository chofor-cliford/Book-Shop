import React from "react";
import { Route, Routes } from "react-router";
import GlobalStyle from "./globalStyles";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import UpdateBook from "./pages/UpdateBook";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/updateBook/:id" element={<UpdateBook />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
