import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: var(--blue);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 1000px) {
    width: 80%;
    flex-direction: row;
    padding: 20px 0;
  }
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  :last-child {
    margin-right: 0;
  }

  @media (min-width: 1000px) {
    margin-right: 30px;
    padding: 20px 0;
  }
`;

export const Heading = styled.h5`
  font-size: 1em;
  text-transform: uppercase;
  color: var(--white);
  margin: 15px 0;

  @media (min-width: 1000px) {
    font-size: 0.9em;
  }
`;

export const Bottom = styled.div`
  margin: 0 auto;
  padding: 20px 20px 30px 20px;
  @media (min-width: 1000px) {
    width: 80%;
    padding: 20px 0 30px 0;
  }
`;

export const Text = styled.span`
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => props.size || "inherit"};
  font-weight: ${(props) => (props.bold ? "bold" : "inherit")};
  line-height: 1.6em;
`;

export const StyledLink = styled(Link)`
  color: var(--green);

  :hover {
    text-decoration: underline;
  }
`;

export const Margin = styled.p`
  margin: 5px 0;
`;

export const Social = styled.div`
  margin-top: 8px;
`;

export const Icons = styled.div`
  display: inline-block;
  background-color: var(--light-blue);
  padding: 12px 12px;
  transition: all 0.25s ease-in-out;
  border-radius: 2px;

  :hover {
    background-color: var(--green);
  }
`;

export const Icon = styled.i`
  font-size: 1.3em;
  color: var(--white);
`;

export const Anchor = styled.a`
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }
`;
