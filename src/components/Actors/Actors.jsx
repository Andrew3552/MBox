import actors from "./actorsItem";

import ListWrapper from "../ListWrapper/ListWrapper";
import WrapperTitle from "../ListWrapper/WrapperTitle";

import "./Actors.scss";

export default function Actors() {
  return (
    <ListWrapper>
      <WrapperTitle children="Popular Actors & Directors" />
      <ul className="wrapper__list wrapper__list--actors">
        {actors.map((item, index) => {
          return (
            <li className="wrapper__list_item_actors" key={index}>
              <img className="wrapper__list_item_actors_img" src={item.img} alt="" loading="lazy" />
              <p className="wrapper__list_item_actors_text">{item.name}</p>
            </li>
          );
        })}
      </ul>
    </ListWrapper>
  );
}
