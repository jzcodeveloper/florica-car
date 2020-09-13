import styled from "styled-components";

export const Container = styled.div`
  margin: 40px auto 60px auto;
  width: 100%;

  @media (min-width: 1000px) {
    width: 82%;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% 0;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  width: 100%;

  @media (min-width: 1000px) {
    width: 73%;
  }
`;

export const Right = styled.div`
  width: 100%;
  padding: 4%;

  @media (min-width: 1000px) {
    width: 300px;
    padding: 0;
    margin-left: 2%;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  padding: 0 8px;

  @media (min-width: 1000px) {
    padding: 0;
    font-size: 2.3em;
  }
`;
