import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import React from "react";

import "../styles/HomeRoute.scss";

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
