import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import "./bootstrap.min.css";
import "./styles/index.scss";
import App from "./App";
import Contact from "./pages/Contacts";
import OurStory from "./pages/OurStory";
import Products from "./pages/Products";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}></Route>
        <Route path="/contacts" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
