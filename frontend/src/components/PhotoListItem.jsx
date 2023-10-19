import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <section className="photo-list__item">
      <div>
        <img src={props.data.imageSource} className="photo-list__image"/>
      </div>
      <section className="photo-list__user-info ">
      <div className="photo-list__user-details">
        <img src={props.data.profile} alt="Profile Avatar" className="photo-list__user-profile" />
        <div className="photo-list__user-details">
        {props.data.username}
          <div className="photo-list__user-location">
          {props.data.location.city}, {props.data.location.country}
          </div>
        </div>
      </div>
      </section>
    </section>
  )
};

export default PhotoListItem;
