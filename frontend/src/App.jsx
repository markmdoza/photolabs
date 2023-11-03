import React, { useState } from "react";
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
    handleClick,
  } = useApplicationData();
  // destructure openModal + others from state
  const { openModal, favPhoto, photo, photoData, topicData } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
        favPhoto={favPhoto}
        handleClick={handleClick}
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
