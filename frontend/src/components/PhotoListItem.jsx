import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { setPhotoSelected } = props;
  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton
          updateToFavPhotoIds={props.updateToFavPhotoIds}
          photoId={props.photoId}
          favourites={props.favourites}
        />
        <img
          src={props.url}
          className="photo-list__image"
          onClick={() => {
            setPhotoSelected(props);
          }}
        />
      </div>
      <div className="photo-list__user-info">
        <div className="photo-list__user-details">
          <img
            src={props.profile}
            alt="Profile Avatar"
            className="photo-list__user-profile"
          />
          <div className="photo-list__user-details">
            {props.name}
            <div className="photo-list__user-location">
              {props.city}, {props.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
