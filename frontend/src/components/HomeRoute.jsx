import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import React, { useState } from "react";

import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  setPhotoSelected,
  updateToFavPhotoIds,
  favPhoto,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotoExists={favPhoto.length > 0} />
      <PhotoList
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        favourites={favPhoto}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
