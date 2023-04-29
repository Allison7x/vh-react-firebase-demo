import { useState } from "react";
import "./Login.css";

function Login() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  return (
    <form className="login-form">
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="f-username">Username</label>
        <input
          type="text"
          id="f-username"
          name="username"
          value={userInput.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="f-password">Password</label>
        <input
          type="password"
          id="f-password"
          name="password"
          value={userInput.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <small>Create Account</small>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
