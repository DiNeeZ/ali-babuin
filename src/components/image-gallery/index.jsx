import React from 'react';
import ImageGallery from 'react-image-gallery';
import './style.css';

const ImageGalerry = ({ images }) => {
  const items = images.map((img) => {
    return {
      original: img,
      thumbnail: img
    };
  });
  console.log(items);
  return (
    <ImageGallery
      items={items}
      originalHeight={900}
      showPlayButton={false}
      showFullscreenButton={false}
      showNav={false}
    />
  );
};

export default ImageGalerry;
