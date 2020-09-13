import styled from "styled-components";

export const Container = styled.div`
  padding: 4%;
  line-height: 1.5em;

  @media (min-width: 1000px) {
    padding: 0;
  }
`;

export const Features = styled.div`
  margin-top: 5%;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #dddddd;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h4`
  text-transform: uppercase;
  font-size: 1em;
  color: var(--black);

  @media (min-width: 1000px) {
    font-size: 0.9em;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 1em;

  @media (min-width: 1000px) {
    font-size: 0.9em;
  }
`;

export const Icon = styled.i`
  color: var(--green);
  margin-right: 8px;
  font-size: 1.2em;
`;
