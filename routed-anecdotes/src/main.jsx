import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
