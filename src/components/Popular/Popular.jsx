import { useState, useEffect } from "react";
import popular from "./popularItem";

import ListWrapper from "../ListWrapper/ListWrapper";
import WrapperTitle from "../ListWrapper/WrapperTitle";
import Button from "../Button/Button";

export default function Popular() {
  const [itemsToShow, setItemsToShow] = useState(8);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setItemsToShow(4);
    }
    if (window.innerWidth <= 768) {
      setItemsToShow(2);
    }
  }, []);
  const handleShowMore = () => {
    if (isExpanded) {
      setItemsToShow(window.innerWidth <= 768 ? 2 : 4);
      setIsExpanded(false);
    } else {
      setItemsToShow(popular.length);
      setIsExpanded(true);
    }
  };
  return (
    <ListWrapper>
      <WrapperTitle children="Popular Genres" />
      <ul className="wrapper__grid">
        {popular.slice(0, itemsToShow).map((item, index) => {
          return (
            <li
              className={`wrapper__grid_item wrapper__grid_item--${index}`}
              key={index}
              style={{ background: item.color }}
            >
              <img className="wrapper__grid_item_img" src={item.img} alt="" />
              <p className="wrapper__grid_item_text">{item.text}</p>
            </li>
          );
        })}
      </ul>
      <Button btnShowMore onClick={handleShowMore}>
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </ListWrapper>
  );
}
