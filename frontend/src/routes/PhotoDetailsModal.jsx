import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  toggleopenModal,
  photoProps,
  similarPhotos,
  toggleFavoritePhoto,
  favPhoto,
}) => {
  const { photoId, username, name, profile, url, url2, city, country } =
    photoProps;
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        {/* <button
          onClick={() => {
            toggleFavoritePhoto();
          }}
        ></button> */}
        <button className="photo-details-modal__close-button">
          <img
            src={url2}
            alt="A photo"
            className="photo-details-modal__image"
          />
          <img
            src={closeSymbol}
            alt="close symbol"
            onClick={() => {
              toggleopenModal({ photoProps });
            }}
          />
        </button>
      </div>
      <div className="photo-details-modal__header">
        <PhotoFavButton
          toggleFavoritePhoto={toggleFavoritePhoto}
          photoId={photoId}
          favourites={favPhoto}
        />
        <img
          src={profile}
          alt="User profile"
          className="photo-details-modal__photographer-profile"
        />
        <div className="photo-details-modal__photographer-details">
          <div className="photo-details-modal__photographer-info ">
            {name}
            <div className="photo-details-modal__photographer-location ">
              {city}, {country}
              <div className="photo-details-modal__images">
                <PhotoList
                  photos={similarPhotos}
                  toggleFavoritePhoto={toggleFavoritePhoto}
                  favourites={favPhoto}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
