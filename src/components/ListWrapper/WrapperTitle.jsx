import { MdKeyboardArrowRight } from "react-icons/md";

import "./WrapperTitle.scss"

export default function WrapperTitle({children}) {
  return (
    <h3 className="wrapper__title">{children}<MdKeyboardArrowRight/></h3>
  )
}
