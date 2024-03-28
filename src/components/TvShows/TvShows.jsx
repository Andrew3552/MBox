import tvShows from "./tvShowsItem";

import ListWrapper from "../ListWrapper/ListWrapper";
import WrapperTitle from "../ListWrapper/WrapperTitle";

import "./TvShows.scss";

export default function TvShows() {

  return (
    <ListWrapper>
      <WrapperTitle children="Trending TV Shows" />
      <ul className="wrapper__list">
        {tvShows.map((url, index) => {
          return (
            <li className="wrapper__list_item" key={index}>
              <img className="wrapper__list_item_img" src={url} alt="img"/>
            </li>
          );
        })}
      </ul>
    </ListWrapper>
  );
}
