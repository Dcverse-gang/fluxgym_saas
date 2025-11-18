import React from "react";
import { Link } from "react-router";

interface LandingNavProps {
  onAnchorClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const LandingNav: React.FC<LandingNavProps> = ({ onAnchorClick }) => {
  return (
    <nav>
      <div className="logo cursor-pointer">
        <Link to="/">CloneX</Link>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#features" onClick={onAnchorClick}>
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={onAnchorClick}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#docs" onClick={onAnchorClick}>
            Documentation
          </a>
        </li>
        <li>
          <a href="#about" onClick={onAnchorClick}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default LandingNav;
