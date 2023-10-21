import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ onClick }) {
  const [favPhoto, setFavPhoto] = useState(false);

  const handleFavoriteClick = () => {
    setFavPhoto((prev) => !prev);
    onClick();
  };

  return (
    <div className="photo-list__fav-icon-svg" onClick={handleFavoriteClick}>
      <FavIcon selected={favPhoto} />
    </div>
  );
}

export default PhotoFavButton;
