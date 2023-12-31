// imported files::
import { Link, Navigate } from "react-router-dom";
import webLogo from "../../../assets/website img/logo.png";
import { useContext } from "react";
import { AuthProvider } from "../../../context/AuthContext";
// nav function::
const Nav = () => {
  // import context:
  const { user, logOut } = useContext(AuthProvider);
  const handleOut = () => {
    logOut()
      .then(() => {
        <Navigate to="/login" replace={true} />;
      })
      .catch(console.log("sign out successfully"));
  };
  // menulist
  const menulist = (
    <div className="menu menu-vertical lg:menu-horizontal">
      <Link className="mx-2 px-4 py-2  bg-base-200 rounded-box" to="/">
        Home
      </Link>
      <Link className="mx-2 px-4 py-2  bg-base-200 rounded-box" to="/about">
        About
      </Link>
      <Link className="mx-2 px-4 py-2  bg-base-200 rounded-box" to="/Services">
        Services
      </Link>
      <Link className="mx-2 px-4 py-2  bg-base-200 rounded-box" to="/Blog">
        Blog
      </Link>
      <Link className="mx-2 px-4 py-2  bg-base-200 rounded-box" to="/contact">
        Contact
      </Link>
    </div>
  );
  return (
    <nav className="mt-6">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menulist}
            </ul>
          </div>
          <div className="web-logo">
            <img src={webLogo} alt="webpage logo" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menulist}</ul>
        </div>
        <div className="navbar-end">
          {user?.email && <span>Welcome, {user.email} </span>}
          {user?.email ? (
            <button onClick={handleOut} className="btn btn-sm">
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
