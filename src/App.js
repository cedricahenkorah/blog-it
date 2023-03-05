import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles
import "./App.css";

// pages and components
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Create from "./pages/create/Create";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
