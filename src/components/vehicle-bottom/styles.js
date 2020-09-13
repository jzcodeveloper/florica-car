import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
`;

export const TabHeaders = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blue);

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const TabHeader = styled.div`
  position: relative;
  padding: 20px;
  margin: 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: bold;
  transition: all 0.5s ease;
  background-color: ${(props) =>
    props.active ? "var(--white);" : "transparent;"};
  color:${(props) => (props.active ? "var(--blue);" : "var(--white);")}

  ::after {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    transition:border 0.5s ease;
    border-top: 5px solid ${(props) =>
      props.active ? "var(--green);" : "transparent"};
  }

  :first-child {
    margin-left: 5px;
  }

  @media(min-width:1000px){
    margin: 0;
  }
`;

export const Tab = styled.div`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  @media (min-width: 1000px) {
    padding: 20px 0;
  }
`;
