import { useState, useReducer } from "react";
import photos from "mocks/photos";

// object will contain the entire state of the application.
function useApplicationData() {
  const [state, setState] = useState({
    openModal: false,
    favPhoto: [],
    photo: null,
  });

  // The updateToFavPhotoIds action can be used to set the favourite photos.
  const updateToFavPhotoIds = (photos) => {
    const isFavorite = state.favPhoto.includes(photos);
    console.log("toggleFavoritePhoto", photos);
    if (isFavorite) {
      setState((prev) => ({
        ...prev,
        favPhoto: prev.favPhoto.filter((id) => id !== photos),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        // Accessing state values.
        favPhoto: [...prev.favPhoto, photos],
      }));
    }
  };

  // The setPhotoSelected action can be used when the user selects a photo.
  const setPhotoSelected = (photo) => {
    setState((prev) => ({ ...prev, photo, openModal: !prev.openModal }));
  };

  const selectedPhoto =
    state.photo && photos.find((photo) => photo.id === state.photo.photoId);

  const similarPhotos = selectedPhoto && selectedPhoto.similar_photos;

  const similarPhotosArray = similarPhotos && Object.values(similarPhotos);

  // The onClosePhotoDetailsModal action can be used to close the modal.
  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, photo: null, openModal: !prev.openModal }));
  };

  return {
    state,
    similarPhotosArray,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
}
export default useApplicationData;
