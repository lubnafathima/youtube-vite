import "./Header.css";
// import SideBar from "../SideBar/SideBar";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="header_container">
      <div className="search_group">
        <input type="text" placeholder="Search" className="search_input" />
        <button className="button">
          <IoSearch />
        </button>
      </div>
      <div className="navbar">
        <button className="button">
          <FaBell />
        </button>
        <button className="button">
          <RxAvatar />
        </button>
      </div>
    </div>
  );
};

export default Header;
