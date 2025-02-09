import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  setPhotoSelected,
  updateToFavPhotoIds,
  favPhoto,
  handleClick,
  toggleTheme,
  theme,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favPhotoExists={favPhoto.length > 0}
        handleClick={handleClick}
        toggleTheme={toggleTheme}
        theme={theme}
      />
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
