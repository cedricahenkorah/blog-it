import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { GiFeather } from "react-icons/gi";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className=" md:py-10 md:mb-10 mb-3 md:px-20 py-5 px-6">
      <ul className="flex mx-auto items-center justify-end">
        <li className="mr-auto flex gap-2 font-semibold md:text-2xl text-xl tracking-widest text-blue-700">
          <span>
            <GiFeather />
          </span>
          <Link to="/">blogIt</Link>
        </li>

        <li className="mr-5 md:flex hidden">
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
            <button className="btn md:flex hidden" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
