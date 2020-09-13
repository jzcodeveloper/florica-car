import styled from "styled-components";

export const Container = styled.div``;

export const Top = styled.div`
  background-color: var(--blue);
  padding-top: 1px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin: 30px auto 20px auto;
  padding: 0 20px;
  color: var(--white);
  text-transform: uppercase;

  @media (min-width: 1000px) {
    padding: 0;
    width: 80%;
  }
`;

export const Title2 = styled.span`
  color: var(--green);
  text-transform: uppercase;
`;

export const TabHeaders = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: var(--blue);

  @media (min-width: 1000px) {
    flex-direction: row;
    width: 80%;
  }
`;

export const TabHeader = styled.div`
  position: relative;
  padding: 15px 20px;
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
