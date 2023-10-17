import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  return (
    <div className="imageSource">
      <img src={sampleDataForPhotoListItem.imageSource}/>
      <div>
        <img src={sampleDataForPhotoListItem.profile} alt="Profile Avatar" />
      </div>
      <div className="username">
        <span>
        {sampleDataForPhotoListItem.username}
        </span>
        <div className="location">
        {sampleDataForPhotoListItem.location.city}
        {sampleDataForPhotoListItem.location.country}
        </div>
      </div>
    </div>
  )
};

console.log();

export default PhotoListItem;
