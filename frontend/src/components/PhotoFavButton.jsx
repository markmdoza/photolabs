import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favPhoto, setFavPhoto] = useState(false);
  
  const toggleFavoritePhoto = () => {
    setFavPhoto(prev => !prev)
  }

  return (
      <div className="photo-list__fav-icon-svg" onClick={toggleFavoritePhoto} >
          <FavIcon selected={favPhoto}/>
      </div>
  );
}


export default PhotoFavButton;