import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className=" py-10 mb-10 px-20">
      <ul className="flex mx-auto items-center justify-end">
        <li className="mr-auto font-bold text-2xl tracking-widest text-blue-700">
          <Link to="/">blogIt</Link>
        </li>

        <li className="mr-5">
          <Link to="/about">About</Link>
        </li>

        {!user && (
          <>
            <li className="mr-5">
              <Link to="/login">Login</Link>
            </li>
            <li className="mr-5">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
