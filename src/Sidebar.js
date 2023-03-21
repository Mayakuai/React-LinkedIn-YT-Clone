import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1562734041-a2d56f060a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3435&q=80" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Joshua Stuart</h2>
        <h5>Joshuasstuart@gmail.com</h5>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who viewed you</p>
          <p className="sidebar__statNumber"> 1 </p>
        </div>
        <div className="sidebar__stat">
          <p> Views on post </p>
          <p className="sidebar__statNumber"> 2,231 </p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent </p>
      </div>
    </div>
  );
}

export default Sidebar;
