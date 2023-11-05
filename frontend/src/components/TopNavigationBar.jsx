import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import ReactSwitch from "react-switch";
import React from "react";

import "../styles/TopNavigationBar.scss";

const TopNavigation = ({
  topics,
  favPhotoExists,
  handleClick,
  toggleTheme,
  theme,
}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleClick={handleClick} />
      <FavBadge favPhotoExists={favPhotoExists} />
      <div className="switch">
        <label> {theme === "light" ? "Light Mode " : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </div>
  );
};

export default TopNavigation;
