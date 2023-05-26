import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../..//lib/firebase";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isLogin) {
      signInWithEmailAndPassword(auth, userInput.email, userInput.password)
        .then((userCredential) => {
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <form className="login-form" method="post" onSubmit={handleSubmit}>
      {isLogin ? (
        <>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="f-email">Email</label>
            <input
              type="email"
              id="f-email"
              name="email"
              value={userInput.email}
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
            <button
              type="button"
              className="convert"
              onClick={() => setIsLogin(!isLogin)}
            >
              Create Account
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>Create Account</h1>
          <div className="form-group">
            <label htmlFor="f-email">Email</label>
            <input
              type="text"
              id="f-email"
              name="email"
              value={userInput.email}
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
            <label htmlFor="f-confirm-password">Confirm Password</label>
            <input
              type="password"
              id="f-confirm-password"
              name="confirmPassword"
              value={userInput.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="convert"
              onClick={() => setIsLogin(!isLogin)}
            >
              Have an account? Log in.
            </button>
          </div>
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
