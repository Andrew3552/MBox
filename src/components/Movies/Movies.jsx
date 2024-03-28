import movies from "./moviesItem";

import ListWrapper from "../ListWrapper/ListWrapper";
import WrapperTitle from "../ListWrapper/WrapperTitle";
import Button from "../Button/Button";

import "./Movies.scss";

export default function Movies() {
  return (
    <ListWrapper>
      <WrapperTitle children="Trending Movies  " />
      <ul className="wrapper__list">
        {movies.map((url, index) => {
          return (
            <li className="wrapper__list_item" key={index}>
              <img className="wrapper__list_item_img" src={url} alt="" />
            </li>
          );
        })}
      </ul>
      <Button btnSeeMore children="See more" />
    </ListWrapper>
  );
}
