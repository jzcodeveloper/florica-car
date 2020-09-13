import styled from "styled-components";
import Background from "../../assets/images/slide_1.jpg";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 250px;
  padding: 0 20px;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${Background});
    z-index: -1;
    filter: brightness(0.5);
  }

  @media (min-width: 1000px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.3em;
  width: 100%;
  margin: 0 auto;
  text-transform: uppercase;
  color: var(--white);

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 1000px) {
    flex-flow: row;
  }
  @media (min-width: 1200px) {
    width: 80%;
    padding: 0;
  }
`;
