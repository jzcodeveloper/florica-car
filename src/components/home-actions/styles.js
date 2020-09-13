import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../assets/images/slide_2.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: calc(100vw / 1.77);
  background-image: url(${Background});
  background-attachment: fixed;
  padding: 20px;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 1000px) {
    min-height: calc(100vw / 2.2);
  }
`;

export const Action = styled(Link)`
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: 20px;
  border-radius: 3px;
  background-color: var(--green);
  z-index: 1;
  max-width: 600px;
  transition: background-color 0.25s ease-in-out;

  @media (min-width: 1000px) {
    width: 80%;
    padding: 50px 30px;
    background-color: var(--transparent-green);
  }

  :hover {
    background-color: var(--green);
  }
`;

export const Column = styled.div``;

export const Icon = styled.i`
  font-size: 2.8em;
  margin-right: 15px;
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const Description = styled.p`
  color: var(--white);
`;
