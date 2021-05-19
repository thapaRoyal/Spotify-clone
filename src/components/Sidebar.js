import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions title="Home" />
      <SidebarOptions title="Search" />
      <SidebarOptions title="Your Library" />
    </div>
  );
}

export default Sidebar;
