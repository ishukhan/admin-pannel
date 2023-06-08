import React from "react";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Ishuadmin</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <span>DashBord</span>
          </li>
          <li>
            <span>DashBord</span>
          </li>
          <li>
            <span>DashBord</span>
          </li>
          <li>
            <span>DashBord</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color option</div>
    </div>
  );
};

export default Sidebar;
