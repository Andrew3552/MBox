import { useState } from "react";
import Navigation from "./components/Navigation";
import UserNavigation from "./components/UserNavigation";
import Button from "../Button/Button";

import Logo from "../../assets/Logo.png";

import "./Header.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <a href="#">
        <img className="header__logo" src={Logo}/>
      </a>
      <Button
        btnToggle
        toggle={isMenuOpen ? "open" : ""}
        onClick={handleMenuToggle}
        className={`header__menu-toggle ${isMenuOpen ? "open" : ""}`}
      >
        &#9776; {/* Unicode character for hamburger icon */}
      </Button>
      <Navigation isOpen={isMenuOpen} />
      <UserNavigation />
    </div>
  );
}
