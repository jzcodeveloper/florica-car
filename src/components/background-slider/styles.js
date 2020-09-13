import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: calc(100vw / 1.77);
  overflow: hidden;
  background-color: var(--blue);

  .slide-enter {
    filter: opacity(0);
  }
  .slide-enter-active {
    filter: opacity(1);
    transition: all 1s ease-in-out;
  }
  .slide-exit {
    filter: opacity(1);
  }
  .slide-exit-active {
    filter: opacity(0);
    transition: all 1s ease;
  }

  @media (min-width: 1000px) {
    min-height: calc(100vw / 2.2);
  }
`;

const SlowMotion = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

export const Slide = styled.img`
  position: absolute;
  height: 100%;
  animation: ${SlowMotion} 5s linear forwards;
`;
