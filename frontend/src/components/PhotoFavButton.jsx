import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const handleClick = useCallback(() => {
    console.log('Button was clicked');
  }, []);

  return (
      <div className="photo-list__fav-icon-svg">
        <button onClick={handleClick} className="photo-list__fav-icon">
          <FavIcon/>
        </button>
      </div>
  );
}


export default PhotoFavButton;