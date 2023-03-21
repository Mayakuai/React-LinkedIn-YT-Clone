import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Joshua Stuart</h2>
        <h4>Joshuasstuart@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> who viewed you</p>
          <p className="sidebar__statNumber"> 1 </p>
        </div>
        <div className="sidebar__stat">
          <p> Views on post </p>
          <p className="sidebar__statNumber"> 2,231 </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
