import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// styles
import "./App.css";

// pages and components
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Blog from "./pages/blog/Blog";
import Feed from "./pages/Feed/Feed";
import Landing from "./pages/landing/Landing";
import Create from "./pages/create/Create";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="w-full">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={!user ? <Landing /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/feed" /> : <Login />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/feed" /> : <Signup />}
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/feed"
                element={user ? <Feed /> : <Navigate to="/" />}
              />
              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/" />}
              />
              <Route path="/blogs/:id" element={<Blog />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
