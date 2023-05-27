import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import AddTodo from "./views/AddTodo/AddTodo";
import Logout from "./views/Logout/Logout";
import "./App.css";
import { auth, onAuthStateChanged } from "./lib/firebase";

function App() {
  // TODO:
  // Depending on whether the user is logged in or not, we want to render
  // different elements to the page. Use a state variable to keep track of
  // this.

  // TODO:
  // Upon page load, check whether the user is logged in or not using the
  // `onAuthStateChanged` function provided by Firebase. Update the login
  // state above depending on whether they are logged in or not.
  useEffect(() => { });

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
          <Route path="/add-todo" element={<AddTodo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
