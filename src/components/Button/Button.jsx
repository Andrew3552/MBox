import cn from "classnames";

import "./Button.scss";

export default function Button(props) {
  const {
    className,
    children,
    moreInfo,
    btnWatch,
    btnSeeMore,
    btnRegister,
    btnShowMore,
    toggle,
    onClick,
    btnToggle
  } = props;

  return (
    <button
      className={cn(
        "button",
        className,
        { "more-info": moreInfo },
        { "btn-watch": btnWatch },
        { "btn__see-more": btnSeeMore },
        { "btn__register": btnRegister },
        { "btn__show-more": btnShowMore },
        { "btn__toggle": btnToggle },
       toggle
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
