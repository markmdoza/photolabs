import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  photo,
  similarPhotos,
  favPhoto,
  onClosePhotoDetailsModal,
  updateToFavPhotoIds,
}) => {
  const { photoId, name, profile, url2, city, country } = photo;
  return (
    <div className="photo-details-modal">
      <img
        className="photo-details-modal__close-button"
        src={closeSymbol}
        alt="close symbol"
        onClick={onClosePhotoDetailsModal}
      />
      <div className="photo-list__fav-icon">
        <PhotoFavButton
          updateToFavPhotoIds={updateToFavPhotoIds}
          photoId={photoId}
          favourites={favPhoto}
        />
      </div>
      <img src={url2} alt="A photo" className="photo-details-modal__image" />
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={profile}
            alt="User profile"
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
    </div>
  );
};

export default PhotoDetailsModal;
