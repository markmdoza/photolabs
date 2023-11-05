import React, { createContext, useState } from "react";
import HomeRoute from "components/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import useApplicationData from "hooks/useApplicationData";

export const ThemeContext = createContext(null);

const App = () => {
  const {
    state,
    similarPhotosArray,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    handleClick,
  } = useApplicationData();
  const { openModal, favPhoto, photo, photoData, topicData } = state;

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div className="App" id={theme}>
        <HomeRoute
          photos={photoData}
          topics={topicData}
          setPhotoSelected={setPhotoSelected}
          updateToFavPhotoIds={updateToFavPhotoIds}
          favPhoto={favPhoto}
          handleClick={handleClick}
          toggleTheme={toggleTheme}
          theme={theme}
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
    </ThemeContext.Provider>
  );
};

export default App;
