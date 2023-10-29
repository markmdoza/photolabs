import React, { useState } from "react";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import HomeRoute from "components/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state,
    similarPhotosArray,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();
  // destructure openModal + others from state
  const { openModal, favPhoto, photo } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
        favPhoto={favPhoto}
      />
      {openModal && (
        <PhotoDetailsModal
          photo={photo}
          similarPhotos={similarPhotosArray || []}
          updateToFavPhotoIds={updateToFavPhotoIds}
          favPhoto={favPhoto}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;
