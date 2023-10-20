import React from "react";
import TopNavigationBar from "./components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "./App.scss";

const App = () => {
  // const photoList = [];
  // for (let i = 0; i < 3; i++) {
  //   photoList.push(
  //     <PhotoListItem key={sampleDataForPhotoListItem.id} data={sampleDataForPhotoListItem}/>
  //   )
  // }
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;
