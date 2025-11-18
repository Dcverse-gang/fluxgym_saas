import type React from "react";
import LandingNav from "../components/LandingNav";

interface HeaderProps {
  onAnchorClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const Header: React.FC<HeaderProps> = ({ onAnchorClick }) => {
  return <LandingNav onAnchorClick={onAnchorClick} />;
};

export default Header;
