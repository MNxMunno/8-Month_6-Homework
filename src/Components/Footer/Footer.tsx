import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.scss";
import Logo from "./logo.svg";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_link ">
            <p>ALL PRODUCTS</p>
            <p>ABOUT SEEDRA</p>
            <p>OUR BLOG</p>
            <img src={Logo} alt="img.footer" />
            <p>Terms&Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="line "></div>

          <div className="footer_bottom ">
            <div className="links">
              <a href="#" target="_blank">
                <AiFillInstagram />
              </a>
              <a href="# " target="_blank">
                <AiFillFacebook />
              </a>
            </div>
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};
