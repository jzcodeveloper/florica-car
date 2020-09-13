import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
`;

export const Shape = styled.div`
  position: relative;
  background-color: var(--green);
  transform: translateX(-13%) skew(-25deg);
  height: 60px;
  width: 110%;
  margin-bottom: 3%;
  border-radius: 0 5px 5px 0;

  ::after {
    content: "";
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    background-color: var(--white);
  }
`;

export const Feature = styled.div`
  transform: skew(25deg);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 13%;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-left: 4.5px solid var(--green);
`;

export const Name = styled.span`
  width: 40%;
  font-size: 0.75em;
  color: #888888;
  text-transform: uppercase;
  margin: 0 5%;
`;

export const Value = styled.h4`
  width: 60%;
  font-size: 0.9em;
  margin-right: 5%;
`;
