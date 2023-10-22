import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return (
    <div className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photoId={photo.id}
          url={photo.urls.full}
          user={photo.user}
          location={photo.location}
          toggleFavoritePhoto={props.toggleFavoritePhoto}
          toggleSidePeek={props.toggleSidePeek}
          favourites={props.favourites}
        />
      ))}
    </div>
  );
};

export default PhotoList;
