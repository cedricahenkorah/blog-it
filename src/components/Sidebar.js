import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuthContext } from "../hooks/useAuthContext";

// styles
import "./Sidebar.css";

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className="sidebar bg-blue-500">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>{user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/feed">
                <span>Feed</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <span>Create Blog</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
