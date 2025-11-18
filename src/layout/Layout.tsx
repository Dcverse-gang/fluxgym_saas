import type React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  onAnchorClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onAnchorClick }) => {
  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (onAnchorClick) {
      onAnchorClick(event);
    } else {
      const href = event.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onAnchorClick={handleAnchorClick} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
