import popular from "./popularItem"

import ListWrapper from "../ListWrapper/ListWrapper";
import WrapperTitle from "../ListWrapper/WrapperTitle";

export default function Popular() {

  

  return (
    <ListWrapper>
        <WrapperTitle children="Popular Genres"/>
        <ul className="wrapper__grid">
        {popular.map((item, index) => {
          return (
            <li 
            className={`wrapper__grid_item wrapper__grid_item--${index}`}
            key={index}
            style={{background: item.color}}>
              <img className="wrapper__grid_item_img" src={item.img} alt="" />
              <p className="wrapper__grid_item_text">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </ListWrapper>
  )
}
