import styled from "styled-components";

export const Container = styled.div`
  flex: 0.3;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  color: var(--green);
  font-size: 2em;
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
`;

export const Text = styled.span`
  flex: 1;
  margin: 15px;
  font-size: 0.85em;
  line-height: 1.5em;
`;

export const Bold = styled.b`
  display: block;
  margin: 10px 0;
`;
