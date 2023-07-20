import { Link } from "react-router-dom";
import formImg from "../../../assets/images/login/login.svg";
import "./SignUp.css";
import { useContext } from "react";
import { AuthProvider } from "../../../context/AuthContext";
export default function SignUp() {
  // import useContext ::
  const { newUser } = useContext(AuthProvider);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    const user = { userEmail, userPassword };
    console.log("user info", user);
    newUser(userEmail, userPassword)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
    // form reset
    form.reset();
  };
  return (
    // form area
    <div className="user-form flex my-14">
      <div className="form-img w-1/2">
        <img src={formImg} alt="" />
      </div>
      <form onSubmit={handleSubmit} className="form-container w-1/2">
        <h2 className="font-semibold text-center mb-7">Registration</h2>
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
        <button className="btn btn-active btn-primary ">Registration</button>
        <span className="swap">
          Already Joined?
          <Link to="/login" className="link link-error">
            Login now.
          </Link>
        </span>
      </form>
    </div>
  );
}
