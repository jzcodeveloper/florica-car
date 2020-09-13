import styled from "styled-components";

export const Container = styled.div`
  margin: 15px 20px;
  min-width: 200px;
`;

export const Filter = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: var(--gray);
  font-size: 0.9em;
  border-radius: 2px;
`;

export const Icon = styled.i`
  margin-left: 10px;
  color: ${(props) => (props.expanded ? "var(--blue)" : "#aaaaaa")};
  transition: transform 0.2s ease, color 0.2s ease;
  transform: rotate(${(props) => (props.expanded ? "-180" : "0")}deg)
    translateY(${(props) => (props.expanded ? "3" : "0")}px);

  ${Container}:hover & {
    color: var(--blue);
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #dddddd;
  background-color: var(--white);
  z-index: 1;
  transition: all 0.2s ease-in;
  max-height: 300px;
  overflow-y: auto;

  &.expand-enter {
    opacity: 0;
  }
  &.expand-enter-active {
    opacity: 1;
  }
  &.expand-exit {
    opacity: 1;
  }
  &.expand-exit-active {
    opacity: 0;
  }
`;

export const Option = styled.div`
  padding: 15px;
  transition: background-color 0.2s ease-in-out;
  border-bottom: 1px solid #f2f2f2;

  :hover {
    background-color: #f2f2f2;
  }

  :last-child {
    border-bottom: none;
  }
`;
