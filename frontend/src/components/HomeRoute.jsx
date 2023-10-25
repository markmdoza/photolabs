import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import React, { useState } from "react";

import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  toggleopenModal,
  toggleFavoritePhoto,
  favPhoto,
  setFavPhoto,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotoExists={favPhoto.length > 0} />
      <PhotoList
        photos={photos}
        toggleFavoritePhoto={toggleFavoritePhoto}
        favourites={favPhoto}
        toggleopenModal={toggleopenModal}
      />
    </div>
  );
};

export default HomeRoute;
