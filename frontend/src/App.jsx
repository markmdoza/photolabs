import React, { useState } from "react";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import HomeRoute from "components/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
  const [sidePeek, setSidePeek] = useState(false);

  const toggleSidePeek = () => {
    setSidePeek(!sidePeek);
  };
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleSidePeek={toggleSidePeek}
      />
      {sidePeek && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
