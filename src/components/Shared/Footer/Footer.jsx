// import files:
import webLogo from "../../../assets/website img/logo.png";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
// import css file:
import "./Footer.css";
// function::

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-neutral-content flex justify-evenly align-middle pt-32">
        <div className="text-white">
          <img src={webLogo} alt="webLogo" />
          <p className="w-72 h-20">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className="icon flex">
            <AiOutlineGithub className="text-4xl px-1" />
            <AiOutlineInstagram className="text-4xl px-1" />
            <AiOutlineLinkedin className="text-4xl px-1" />
          </div>
        </div>
        <div>
          <span className="footer-title">About</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesibility</a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
