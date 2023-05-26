import { useState, useEffect } from "react";
import * as firebaseLib from "../..//lib/firebase";
import TodoList from "../..//components/TodoList/TodoList";
import "./Home.css";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState([]);

  async function handleAdd() { }

  async function getData() {
    const query = await firebaseLib.getDocs(
      firebaseLib.collection(firebaseLib.db, "todos")
    );
    const todos = [];
    query.forEach((doc) => {
      todos.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setTodos(todos);
  }

  useEffect(() => {
    // Request data from Cloud Firestore only if user is authenticated
    firebaseLib.onAuthStateChanged(firebaseLib.auth, (user) => {
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
