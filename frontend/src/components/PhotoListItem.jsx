import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="imageSource">
      <div className="photo-list__item">
        <img src={props.data.imageSource} className="photo-list__image"/>
      </div>
      <div>
        <img src={props.data.profile} alt="Profile Avatar" className="photo-list__user-profile" />
      </div>
      <div className="username">
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
