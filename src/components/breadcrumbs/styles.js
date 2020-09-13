import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 20px 20px 0 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dddddd;

  @media (min-width: 1000px) {
    margin: 20px 0;
  }
`;

export const StyledLink = styled(Link)`
  color: #888888;
  font-size: 0.7em;
  text-transform: uppercase;
  transition: color 0.25s ease-in-out;

  :hover {
    color: var(--green);
  }
`;

export const Separator = styled.span`
  margin: 0 8px;
  font-size: 0.7rem;
`;

export const Span = styled.span`
  color: #888888;
  font-size: 0.7em;
  text-transform: uppercase;
`;
