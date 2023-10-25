import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { toggleopenModal } = props;
  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton
          toggleFavoritePhoto={props.toggleFavoritePhoto}
          photoId={props.photoId}
          favourites={props.favourites}
        />
        <img
          src={props.url}
          className="photo-list__image"
          onClick={() => {
            toggleopenModal({
              photoId: props.photoId,
              username: props.username,
              name: props.name,
              profile: props.profile,
              url: props.url,
              url2: props.url2,
              city: props.city,
              country: props.country,
            });
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
