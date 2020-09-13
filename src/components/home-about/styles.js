import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: var(--gray);
  padding: 50px 20px 70px 20px;
  text-align: center;

  @media (min-width: 1000px) {
    padding: 50px 30px 70px 30px;
  }
`;

export const Title = styled.h1`
  position: relative;
  text-align: center;
  font-size: 2.5em;
  text-transform: uppercase;
  padding-bottom: 20px;
  margin: 0 auto 20px auto;

  ::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: calc(50% - 100px);
    width: 200px;
    margin: 0 auto;
    height: 8px;
    background-color: var(--green);
    transform: skew(-20deg);
    border-radius: 3px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

export const Flex = styled.div`
  display: flex;

  @media (min-width: 1000px) {
    padding: 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.i`
  font-size: 3em;
  margin: 20px;
`;

export const Heading = styled.h4`
  text-transform: uppercase;
  margin: 0 20px;
`;

export const Paragraph = styled.p`
  margin: 20px;
  font-size: 0.9em;
  color: #888888;
`;

export const Button = styled(Link)`
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9em;
  text-transform: uppercase;
  padding: 15px 25px;
  margin: 0 auto;
  border-radius: 3px;
  border-bottom: 2px solid var(--dark-green);
  color: var(--white);
  background-color: var(--green);

  :hover {
    opacity: 0.75;
  }
`;
