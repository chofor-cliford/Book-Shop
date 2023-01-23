import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookContextProvider } from "./context/StateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <BookContextProvider>
    <App />
  </BookContextProvider>
  </BrowserRouter>
);
