import React, { useState } from "react";

import { Container, Images, Image, Thumbnails, Thumbnail } from "./styles";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const setCurrentIndex = (index) => {
    setIndex(index);
  };

  return (
    <Container>
      <Images index={index}>
        {images.map((image) => (
          <Image
            key={image.id}
            src={
              process.env.NODE_ENV !== "development"
                ? image.url
                : process.env.REACT_APP_BACKEND_URL + image.url
            }
            alt={image.alternativeText}
            caption={image.caption}
          />
        ))}
      </Images>

      <Thumbnails index={index} total={images.length}>
        {images.map((image, i) => (
          <Thumbnail
            key={image.id}
            active={index === i}
            src={
              process.env.NODE_ENV !== "development"
                ? image.url
                : process.env.REACT_APP_BACKEND_URL + image.url
            }
            alt={image.alternativeText}
            caption={image.caption}
            onClick={setCurrentIndex.bind(null, i)}
          />
        ))}
      </Thumbnails>
    </Container>
  );
};

export default Carousel;
