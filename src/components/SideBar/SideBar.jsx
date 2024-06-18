import { useState } from "react";
import "./SideBar.css";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="menu_icon" onClick={toggleSidebar}>
        <IoMdMenu />
        {!isCollapsed && <span>Youtube</span>}
      </div>
      <div className="sidebar_items">
        <Link to="/" className="sidebar_item">
          <FaHome />
          {!isCollapsed && <span>Home</span>}
        </Link>
        <Link to="/shorts" className="sidebar_item">
          <SiYoutubeshorts />
          {!isCollapsed && <span>Shorts</span>}
        </Link>
        <Link to="" className="sidebar_item">
          <MdSubscriptions />
          {!isCollapsed && <span>Subscriptions</span>}
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
