import React from "react";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import Home from "./components/Pages/Home";
import ItemDetail from "./components/Pages/ItemDetail";
import Post from "./components/Pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/create-post" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
