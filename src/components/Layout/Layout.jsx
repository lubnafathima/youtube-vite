import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <div className="layout_main">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
