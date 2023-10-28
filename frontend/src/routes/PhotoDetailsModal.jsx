import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  setPhotoSelected,
  photo,
  similarPhotos,
  favPhoto,
  onClosePhotoDetailsModal,
  updateToFavPhotoIds,
}) => {
  const { photoId, username, name, profile, url, url2, city, country } = photo;
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__close-button">
        <img
          src={closeSymbol}
          alt="close symbol"
          onClick={onClosePhotoDetailsModal}
        />
      </div>
      <div>
        <div className="photo-list__fav-icon">
          <PhotoFavButton
            updateToFavPhotoIds={updateToFavPhotoIds}
            photoId={photoId}
            favourites={favPhoto}
          />
        </div>
        <img src={url2} alt="A photo" className="photo-details-modal__image" />
      </div>
      <>
        <div className="photo-details-modal__header">
          <div className="photo-details-modal__photographer-details">
            <img
              src={profile}
              alt="User profile"
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info ">
              {name}
              <div className="photo-details-modal__photographer-location ">
                {city}, {country}
              </div>
              <span>
                <h2>Similar Photos</h2>
              </span>
              <div className="photo-details-modal__images">
                <PhotoList
                  photos={similarPhotos}
                  updateToFavPhotoIds={updateToFavPhotoIds}
                  favourites={favPhoto}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default PhotoDetailsModal;
