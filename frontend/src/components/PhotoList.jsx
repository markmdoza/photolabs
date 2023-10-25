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
          url2={photo.urls.regular}
          user={photo.user}
          username={photo.user.username}
          name={photo.user.name}
          profile={photo.user.profile}
          city={photo.location.city}
          country={photo.location.country}
          toggleFavoritePhoto={props.toggleFavoritePhoto}
          toggleopenModal={props.toggleopenModal}
          favourites={props.favourites}
        />
      ))}
    </div>
  );
};

export default PhotoList;
