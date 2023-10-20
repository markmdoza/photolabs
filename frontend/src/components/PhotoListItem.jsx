import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton />
        <img src={props.url} className="photo-list__image" />
      </div>
      <div className="photo-list__user-info">
        <div className="photo-list__user-details">
          <img
            src={props.user.profile}
            alt="Profile Avatar"
            className="photo-list__user-profile"
          />
          <div className="photo-list__user-details">
            {props.user.name}
            <div className="photo-list__user-location">
              {props.location.city}, {props.location.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
