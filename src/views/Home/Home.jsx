import { useState, useEffect } from "react";
import {
  auth,
  collection,
  db,
  getDocs,
  onAuthStateChanged,
} from "../../lib/firebase";
import TodoList from "../..//components/TodoList/TodoList";
import "./Home.css";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState([]);

  async function getData() {
    // TODO:
    // Use the `getDocs` and `collection` functions to pull the todos
    // collection associated with the current user from the database.
    // `getDocs` returns the collection that must be iterated over using the
    // `.forEach` method. Store each document in a separate list and update
    // the `todos` state so they can be rendered onto the page.
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getData();
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      {isLoggedIn ? (
        <>
          <button type="button" className="add-todo" onClick={handleAdd}>
            <a href="/add-todo" style={{ color: "white" }}>
              +
            </a>
          </button>
          <TodoList todos={todos} />
        </>
      ) : (
        <p>You must be logged in to view your todos!</p>
      )}
    </>
  );
}

export default Home;
