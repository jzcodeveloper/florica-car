import styled from "styled-components";

export const Container = styled.div`
  display: none;
  height: 50px;
  background-color: var(--blue);
  font-size: 0.75em;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Left = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  min-width: 34px;
  min-height: 34px;
  border-radius: 50%;
  border: 3.4px solid var(--green);
  font-size: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const Text = styled.span`
  color: #dddddd;
  text-transform: uppercase;
  transition: color 0.25s ease;

  :hover {
    color: #ffffff;
  }
`;

export const Lang = styled.span`
  cursor: pointer;
  color: #dddddd;
  text-transform: uppercase;
  transition: color 0.25s ease;

  :hover {
    color: #ffffff;
  }
`;

export const Icon = styled.i`
  color: var(--green);
  font-size: 2em;
`;
