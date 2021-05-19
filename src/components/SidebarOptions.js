import React from "react";
import "./SidebarOption.css";

function SidebarOptions({ title, Icon }) {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
}

export default SidebarOptions;
