import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  min-height: 2000px;

  @media (min-width: 500px) {
    min-height: 1000px;
  }

  @media (min-width: 800px) {
    min-height: 750x;
  }

  @media (min-width: 1100px) {
    min-height: 500px;
  }

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Grids = styled.div`
  display: grid;
  padding: 0 20px;
  grid-gap: 30px;

  @media (min-width: 500px) {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9em;
  text-transform: uppercase;
  padding: 14px 20px;
  margin: 30px auto 0 auto;
  border-radius: 3px;
  border-bottom: 2px solid var(--dark-green);
  color: var(--white);
  background-color: var(--green);

  :active {
    transform: translateY(2px);
    border-bottom: 0px solid var(--dark-green);
  }
`;
