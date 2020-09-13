import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(100vw / 2.8);

  @media (min-width: 1000px) {
    width: 80%;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  margin: 50px auto;
  text-transform: uppercase;
  text-align: center;
  max-width: 700px;

  @media (min-width: 1000px) {
    font-size: 2.3em;
  }
`;
