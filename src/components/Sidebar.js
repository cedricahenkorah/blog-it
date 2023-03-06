import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";

// styles
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar bg-blue-600">
      <div className="sidebar-content">
        <div className="user">
          <Avatar />
          <p>Hey user</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/feed">
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
