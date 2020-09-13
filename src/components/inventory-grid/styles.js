import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  overflow: hidden;
`;

export const StyledLink = styled(Link)``;

export const Image = styled.img`
  cursor: pointer;
  margin-bottom: 10px;
  transition: filter 0.25s ease-in-out;
  height: 170px;
  object-fit: cover;

  ${Container}:hover & {
    filter: brightness(0.75);
  }

  @media (min-width: 1000px) {
    height: 130px;
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 13px;
  margin-bottom: 3px;
  border-bottom: 1px solid #dddddd;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 1em;
  text-transform: uppercase;

  @media (min-width: 1000px) {
    font-size: 0.8em;
  }
`;

export const Shape = styled.div`
  transform: skew(-20deg) translateX(10px);
  background-color: var(--green);
  padding: 0 10px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Price = styled.p`
  margin: 10px 10px 10px 0;
  font-size: 0.9em;
  font-weight: bold;
  transform: skew(20deg);
  color: var(--white);
`;

export const Inline = styled.span`
  font-size: 0.85em;
  margin-right: 5px;

  @media (min-width: 1000px) {
    font-size: 0.75em;
  }
`;

export const Feature = styled.span`
  margin-right: 5px;
`;

export const Icon = styled.i`
  color: var(--green);
`;
