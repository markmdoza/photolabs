import React from "react";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import HomeRoute from "components/HomeRoute";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
