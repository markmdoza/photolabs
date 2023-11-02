import { useReducer, useEffect } from "react";
import axios from "axios";

// object will contain the entire state of the application.
const initialState = {
  openModal: false,
  favPhoto: [],
  photo: null,
  photoData: [],
  topicData: [],
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DESELECT_PHOTO: "DESELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("/api/photos")
      .then((res) => {
        console.log("Response:", res.data);
      })
      .catch((error) => {
        console.error("There was an error making the API request:", error);
      });
  }, []);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return {
          ...state,
          favPhoto: [...state.favPhoto, action.payload.id],
        };
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state,
          favPhoto: state.favPhoto.filter((id) => id !== action.payload.id),
        };
      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          photo: action.payload.photo,
          openModal: !state.openModal,
        };
      case ACTIONS.DESELECT_PHOTO:
        return {
          ...state,
          photo: null,
          openModal: false,
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  // The updateToFavPhotoIds action can be used to set the favourite photos.
  const updateToFavPhotoIds = (photos) => {
    const isFavorite = state.favPhoto.includes(photos);
    console.log("toggleFavoritePhoto", photos);
    if (isFavorite) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photos } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photos } });
    }
  };

  // The setPhotoSelected action can be used when the user selects a photo.
  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const selectedPhoto =
    state.photo && photos.find((photo) => photo.id === state.photo.photoId);

  const similarPhotos = selectedPhoto && selectedPhoto.similar_photos;

  const similarPhotosArray = similarPhotos && Object.values(similarPhotos);

  // The onClosePhotoDetailsModal action can be used to close the modal.
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DESELECT_PHOTO });
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
