import { BsFillTriangleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import Button from "../Button/Button";
import mainImg from "../../assets/mainImg.png";

import "./MainTitle.scss";

export default function MainTitle() {
  return (
    <div className="main-title">
      <div className="main-title__wrapper">
        <h1 className="main-title__title">Zack Snyder's Justice League</h1>
        <div className="main-title__info__wrapper">
          <span className="main-title__info">2021</span>
          <div className="main-title__info_content">
            <span className="main-title__info age">18+</span>
          </div>
          <span className="main-title__info">4h 2min</span>
          <span className="main-title__info">
            8.8
            <FaStar className="star" />
          </span>
        </div>
        <p className="main-title__description">
          Determined to ensure Superman's ultimate sacrifice was not in vain,
          Bruce Wayne aligns forces with Diana Prince with plans to recruit a
          team of metahumans to protect the world from an approaching threat of
          catastrophic proportions.
        </p>
        <div className="main-title__btns__wrapper">
          <Button btnWatch>
            <BsFillTriangleFill
              className="btn-watch__icon"
              style={{ transform: "rotate(90deg)" }}
            />
            <p>Watch</p>
          </Button>
          <Button moreInfo>More information</Button>
        </div>
      </div>
      <div className="main-title__img__wrapper">
        <img className="main-title__img" src={mainImg} alt="" />
      </div>
    </div>
  );
}
