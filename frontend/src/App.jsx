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

  // const [openModal, setopenModal] = useState(false);
  // const [photoProps, setPhotoProps] = useState(null);
  // const [favPhoto, setFavPhoto] = useState([]);

  // const toggleFavoritePhoto = (photos) => {
  //   const isFavorite = favPhoto.includes(photos);
  //   console.log("toggleFavoritePhoto", photos);
  //   if (isFavorite) {
  //     setFavPhoto(favPhoto.filter((id) => id !== photos));
  //   } else {
  //     setFavPhoto([...favPhoto, photos]);
  //   }
  // };

  // const setPhotoSelected = (props) => {
  //   setPhotoProps(props);
  //   setopenModal(!openModal);
  // };

  // const selectedPhoto =
  //   photoProps && photos.find((photo) => photo.id === photoProps.photoId);

  // const similarPhotos = selectedPhoto && selectedPhoto.similar_photos;

  // const similarPhotosArray = similarPhotos && Object.values(similarPhotos);

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
          setPhotoSelected={() => setPhotoSelected()}
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
