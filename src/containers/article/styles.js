import styled from "styled-components";

export const Container = styled.div``;

export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 300px;
  padding: 40px 20px 60px 20px;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    z-index: -1;
    filter: brightness(0.5);
  }

  @media (min-width: 1000px) {
    padding: 40px 0 60px 0;
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

export const Main = styled.div`
  margin: 40px auto 60px auto;
  width: 100%;

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Content = styled.div`
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #dddddd;

  @media (min-width: 1000px) {
    padding: 0 0 20px 0;
  }
`;

export const Date = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  padding: 10px 0;
  color: #bbbbbb;
  width: calc(100% - 40px);
  border-top: 1px solid #bbbbbb;
  font-size: 0.9em;
  text-transform: capitalize;

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Icon = styled.i`
  font-size: 1.1em;
  color: #bbbbbb;
  margin-right: 10px;
`;
