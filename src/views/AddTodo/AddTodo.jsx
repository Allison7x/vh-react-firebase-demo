import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, db } from "../../lib/firebase";

function AddTodo() {
  const navigate = useNavigate("/");
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await addDoc(collection(db, "todos"), {
      ...userInput,
      added: new Date(),
    });
    navigate("/");
  }

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  return (
    <div className="add-todo-container">
      <h1>Add Todo</h1>
      <form className="add-todo-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="f_title">Title</label>
          <input
            type="text"
            id="f_title"
            name="title"
            value={userInput.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="f_description">Description</label>
          <textarea
            id="f_description"
            name="description"
            value={userInput.description}
            onChange={handleChange}
            rows={10}
            style={{ width: "50%" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTodo;
