import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function UserNavigation() {
  return (
    <div className="header__user_nav">
      <IoIosSearch size={20}  className="user__nav_icon" />
      <div className="notification">
        <IoMdNotificationsOutline size={20}  className="user__nav_icon" />
        <span className="notification-dot"></span>
      </div>
      <AiOutlineUserAdd size={20}  className="user__nav_icon" />
    </div>
  );
}
