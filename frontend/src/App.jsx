import React, { useState } from "react";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import HomeRoute from "components/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
  const [openModal, setopenModal] = useState(false);
  const [photoProps, setPhotoProps] = useState(null);
  const [favPhoto, setFavPhoto] = useState([]);
  const toggleFavoritePhoto = (photos) => {
    const isFavorite = favPhoto.includes(photos);

    if (isFavorite) {
      setFavPhoto(favPhoto.filter((id) => id !== photos));
    } else {
      setFavPhoto([...favPhoto, photos]);
    }
  };

  const toggleopenModal = (props) => {
    setPhotoProps(props);
    setopenModal(!openModal);
  };

  const selectedPhoto =
    photoProps && photos.find((photo) => photo.id === photoProps.photoId);

  const similarPhotos = selectedPhoto && selectedPhoto.similar_photos;

  const similarPhotosArray = similarPhotos && Object.values(similarPhotos);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleopenModal={toggleopenModal}
      />
      {openModal && (
        <PhotoDetailsModal
          toggleopenModal={() => toggleopenModal(photoProps)}
          photoProps={photoProps}
          similarPhotos={similarPhotosArray || []}
          toggleFavoritePhoto={toggleFavoritePhoto}
        />
      )}
    </div>
  );
};

export default App;
