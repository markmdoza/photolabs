import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import './App.scss';

const App = () => {
  const photoList = [];

  for (let i = 0; i < 3; i++) {
    const sampleDataForPhotoListItem = {
      id: `${i + 1}`,
      location: {
        city: "Montreal",
        country: "Canada",
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-${i + 1}-Regular.jpeg`,
      username: 'Joe Example',
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    };

    photoList.push(
      <PhotoListItem key={sampleDataForPhotoListItem.id} data={sampleDataForPhotoListItem}/>
    )
  }
  return (
    <div className="App">
      {photoList}
    </div>
  );
};

export default App;
