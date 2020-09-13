import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import backgroundSlides from "./background-slides";
import { useInterval } from "../../hooks/customHooks";

import { Container, Slide } from "./styles";

const BackgroundSlider = () => {
  const [index, setIndex] = useState(0);

  useInterval(() => {
    if (index === backgroundSlides.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }, 5000);

  return (
    <Container>
      <TransitionGroup>
        <CSSTransition
          classNames="slide"
          timeout={1000}
          key={index}
          exit={false}
        >
          <Slide
            src={backgroundSlides[index].src}
            alt={backgroundSlides[index].alt}
          />
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default BackgroundSlider;
