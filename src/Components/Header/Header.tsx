import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import "./Header.scss";
import Logo from "./logo.svg";
import { CiHeart } from "react-icons/ci";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={shrink ? "shrink" : ""}>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="/">
                <img src={Logo} alt="Logo.svg" />
              </a>
            </div>

            <div className={`items ${menuOpen ? "open" : ""}`}>
              <a href="#">ALL PRODUCTS</a>
              <a href="#">ABOUT SEEDRA</a>
              <a href="#">OUR BLOG</a>
              <a href="/contact">CONTACTS</a>
              <span>
                <AiOutlineInstagram /> <BsFacebook />
              </span>
              <input type="search" placeholder="Search..." />
            </div>

            <div className="icons">
              <span>
                <CiHeart />
              </span>
              <span>
                <AiOutlineShoppingCart />
              </span>
            </div>

            <div className="menu" onClick={toggleMenu}>
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
