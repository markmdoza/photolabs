import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const toggleLike = () => {
    props.updateToFavPhotoIds(props.photoId);
  };

  const colorCheck = props.favourites?.includes(props.photoId);

  return (
    <div className="photo-list__fav-icon-svg" onClick={toggleLike}>
      <FavIcon selected={colorCheck} />
    </div>
  );
}

export default PhotoFavButton;
