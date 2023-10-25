import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const toggleFavPhoto = () => {
    props.toggleFavoritePhoto(props.photoId);
  };

  const colorCheck = props.favourites?.includes(props.photoId);

  return (
    <div className="photo-list__fav-icon-svg" onClick={toggleFavPhoto}>
      <FavIcon selected={colorCheck} />
    </div>
  );
}

export default PhotoFavButton;
