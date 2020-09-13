import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

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
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  padding: 10px 30px 10px 30px;
  border-radius: 3px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid #dddddd;
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-size: 1em;
  font-weight: normal;
  line-height: 1.5em;
`;

export const Icon = styled.i`
  color: var(--green);
  margin-right: 10px;
`;

export const Date = styled.span`
  font-size: 0.8em;
  text-transform: capitalize;
`;
