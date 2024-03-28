import banner from "../../assets/banner.webp";
import Button from "../Button/Button";

import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <img className="banner__img" src={banner} alt="banner" />
      <div className="banner__content">
        <h2 className="banner__title">
          Are You New Here ? <br/>Don’t wait, Register Now.
        </h2>
        <Button btnRegister children="Register now" />
      </div>
    </div>
  );
}
