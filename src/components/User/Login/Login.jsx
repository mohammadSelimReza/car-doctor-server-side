import { Link } from "react-router-dom";
import formImg from "../../../assets/images/login/login.svg";
import "./Login.css";
import { useContext } from "react";
import { AuthProvider } from "../../../context/AuthContext";
export default function Login() {
  // import usecontext::
  const { userLogin } = useContext(AuthProvider);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    const user = { userEmail, userPassword };
    console.log(user);
    // implement useCOntext:
    userLogin(userEmail, userPassword)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));

    // form reset:
    form.reset();
  };
  return (
    <div className="user-form flex my-14">
      <div className="form-img w-1/2">
        <img src={formImg} alt="" />
      </div>
      <form onSubmit={handleLogin} className="form-container w-1/2">
        <h2 className="font-semibold text-center mb-7">Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button className="btn btn-active btn-primary ">Login</button>
        <p className="swap">
          New Here?
          <span>
            <Link to="/signup" className="link link-error">
              Sign Up now.
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}
