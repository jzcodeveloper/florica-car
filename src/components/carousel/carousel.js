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
            src={image.url}
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
            src={image.url}
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
