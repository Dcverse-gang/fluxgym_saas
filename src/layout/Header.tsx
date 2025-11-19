import React from "react";
import { Link } from "react-router";

const Header: React.FC = () => {
  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const href = event.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav>
      <div className="logo cursor-pointer">
        <Link to="/">CloneX</Link>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#features" onClick={handleAnchorClick}>
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={handleAnchorClick}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#docs" onClick={handleAnchorClick}>
            Documentation
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleAnchorClick}>
            About
          </a>
        </li>
        <li>
          <button className="btn-login">
            <Link to="/login">Login</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
