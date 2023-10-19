import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <div>
        <img src={props.data.imageSource} className="photo-list__image"/>
      </div>
      <div className="photo-list__user-details">
        <img src={props.data.profile} alt="Profile Avatar" className="photo-list__user-profile" />
      </div>
      <div className="photo-list__user-details">
        <span className="photo-list__user-info">
          {props.data.username}
        </span>
        <div className="photo-list__user-location">
          {props.data.location.city}
          {props.data.location.country}
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
