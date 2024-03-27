
import FooterListWrapper from "./components/FooterListWrapper";
import FooterList from "./components/FooterList";

import Logo from "../../assets/Logo.png";

import { listOne, listTwo, listThree, listFour } from './components/footerListItem';

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <a href='#'><img className="footer__logo" src={Logo} alt="logo"/></a>
      <FooterListWrapper>
        {listOne.map((item, index) => (
          <FooterList key={index}>{item}</FooterList>
        ))}
      </FooterListWrapper>
      <FooterListWrapper>
        {listTwo.map((item, index) => (
          <FooterList key={index}>{item}</FooterList>
        ))}
      </FooterListWrapper>
      <FooterListWrapper>
        {listThree.map((item, index) => (
          <FooterList key={index}>{item}</FooterList>
        ))}
      </FooterListWrapper>
      <FooterListWrapper>
        {listFour.map((item, index) => (
          <FooterList key={index}>{item}</FooterList>
        ))}
      </FooterListWrapper>
    </div>
  );
}