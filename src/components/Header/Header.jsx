import { useState } from "react";
import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleNotificationToggle = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className="header_container">
      <div className="search_group">
        <input type="text" placeholder="Search" className="search_input" />
        <button className="button">
          <IoSearch />
        </button>
      </div>
      <div className="navbar">
        <button className="button" onClick={handleNotificationToggle}>
          <FaBell />
        </button>
        <button className="button">
          <RxAvatar />
        </button>
      </div>
      {isNotificationOpen && (
        <div className="notification_container">{/*  */}</div>
      )}
    </div>
  );
};

export default Header;
