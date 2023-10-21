import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import React from "react";

import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ topics, favPhotoExists }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge favPhotoExists={favPhotoExists} />
    </div>
  );
};

export default TopNavigation;
