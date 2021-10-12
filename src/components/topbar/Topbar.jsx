import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFo7MUuazOnnw/profile-displayphoto-shrink_400_400/0/1597355012965?e=1638403200&v=beta&t=XZGBqyrzz8KgTWveWsN4n2xEmwiTn4Vq6DS7RXHL8cE"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
