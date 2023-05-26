import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import AddTodo from "./views/AddTodo/AddTodo";
import Logout from "./views/Logout/Logout";
import "./App.css";
import { auth, onAuthStateChanged } from "./lib/firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  });

  return (
    <>
      <nav>
        <a href="/">Home</a>
        {!isLoggedIn ? (
          <a href="/login">Login</a>
        ) : (
          <a href="/logout">Logout</a>
        )}
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
