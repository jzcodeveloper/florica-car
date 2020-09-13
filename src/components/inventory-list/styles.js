import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dddddd;
  padding: 30px 0 0 0;
  overflow: hidden;

  :first-child {
    padding-top: 0;
  }
  :last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 30px 0 28px 0;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
`;

export const Images = styled.div`
  flex: 0.35;
  position: relative;
  overflow: hidden;

  @media (min-width: 1000px) {
    margin-right: 25px;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  transition: filter 0.25s ease-in-out;

  :hover {
    filter: brightness(0.75);
  }
`;

export const Details = styled.div`
  flex: 0.65;
`;

export const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  transition: color 0.25s ease-in-out;

  :hover {
    color: var(--green);
  }

  @media (min-width: 1000px) {
    margin: 0;
  }
`;

export const AbsoluteShape = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: skew(-20deg) translateX(10px);
  background-color: var(--green);
  padding: 0 20px;
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const Shape = styled.div`
  transform: skew(-20deg) translateX(10px);
  background-color: var(--green);
  padding: 0 20px;
  display: none;
  align-items: center;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

export const Label = styled.p`
  margin: 0 8px 0 0;
  font-size: 0.6em;
  transform: skew(20deg);
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
`;

export const Price = styled.p`
  margin: 12px 12px 12px 0;
  font-size: 1.1em;
  font-weight: bold;
  transform: skew(20deg);
  color: var(--white);
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    padding: 20px 0;
    flex-direction: row;
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #dddddd;

  :last-child {
    margin-right: 0;
    border: none;
  }

  @media (min-width: 1000px) {
    align-items: initial;
    padding: 0 10px 0 0;
    margin-right: 10px;
    border-bottom: none;
    border-right: 1px solid #dddddd;
  }
`;

export const Icon = styled.i`
  font-size: 1.2em;

  @media (min-width: 1000px) {
    font-size: 1em;
  }
`;

export const Feature = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  margin-bottom: 5px;
  color: #aaaaaa;
  font-size: 0.6em;
  text-transform: uppercase;
`;

export const Value = styled.h5`
  font-weight: bold;
  font-size: 0.9em;
  margin: 0;
`;
