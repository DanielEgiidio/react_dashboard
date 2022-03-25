import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";

import avatar from "../../assets/avatar.jpg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="toLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBag">3</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBag">3</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src={avatar} alt="user" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
