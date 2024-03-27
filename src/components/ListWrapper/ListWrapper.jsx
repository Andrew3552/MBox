import cn from "classnames";

import "./ListWrapper.scss";

export default function ListWrapper({children , classNames, movies}) {
  return (
    <div className={cn("wrapper", classNames, {"movies":movies})}> 
        {children}
    </div>
  )
}
