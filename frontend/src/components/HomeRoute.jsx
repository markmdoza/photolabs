import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import React, { useState } from "react";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  const [favPhoto, setFavPhoto] = useState([]);
  const toggleFavoritePhoto = (photos) => {
    const isFavorite = favPhoto.includes(photos);

    if (isFavorite) {
      setFavPhoto(favPhoto.filter((id) => id !== photos));
    } else {
      setFavPhoto([...favPhoto, photos]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} toggleFavoritePhoto={toggleFavoritePhoto} />
    </div>
  );
};

export default HomeRoute;
