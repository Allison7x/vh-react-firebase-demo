import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
