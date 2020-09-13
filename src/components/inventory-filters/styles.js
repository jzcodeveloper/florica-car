import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 60px 0 1px 0;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.33);

  @media (min-width: 1000px) {
    margin-right: 30px;
    max-width: 260px;
  }
`;

export const Header = styled.div`
  position: absolute;
  width: 100%;
  padding: 30px 20px;
  top: -32px;
  left: 0;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  font-size: 0.9em;
`;

export const Icon = styled.i`
  color: var(--white);
  margin-right: 20px;
  font-size: 2em;
`;

export const Text = styled.span`
  color: var(--white);
`;
