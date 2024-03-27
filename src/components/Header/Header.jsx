import Navigation from "./components/Navigation";
import UserNavigation from "./components/UserNavigation";

import Logo from "../../assets/Logo.png";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
     <a href="#"><img className="header__logo" src={Logo} alt="logo" /></a>
      <Navigation />
      <UserNavigation />
    </div>
  );
}
