import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="imageSource">
      <img src={props.data.imageSource}/>
      <div>
        <img src={props.data.profile} alt="Profile Avatar" />
      </div>
      <div className="username">
        <span>
          {props.data.username}
        </span>
        <div className="location">
          {props.data.location.city}
          {props.data.location.country}
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
