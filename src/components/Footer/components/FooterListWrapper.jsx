import cn from "classnames";

export default function FooterListWrapper({children, className, itemOne, itemTwo, itemThree, itemFour}) {
  return (
    <ul className={cn("footer__list",
    className,
    {"item_one":itemOne},
    {"item_two":itemTwo},
    {"item_three":itemThree},
    {"item_four":itemFour})}>{children}</ul>
  )
}
