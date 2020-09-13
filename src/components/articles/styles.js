import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  grid-gap: 50px 30px;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dddddd;
  padding: 30px 0 10px 0;
`;

export const BottomIcon = styled.i`
  color: inherit;
`;

export const Square = (props) => `
  padding: 10px 20px;
  border-radius: 3px;
  background-color: var(--green);
  cursor: pointer;
  pointer-events: ${props.active ? "none" : "all"};
  background-color: ${props.active ? "var(--gray)" : "var(--green)"};
  color: ${props.active ? "var(--blue)" : "var(--white)"};
  cursor: ${props.active ? "unset" : "pointer"};
`;

export const Prev = styled.div`
  ${(props) => Square(props)}
`;

export const Pages = styled.div`
  display: flex;
`;

export const Page = styled.div`
  ${(props) => Square(props)}
  padding: 10px 0;
  margin: 0 10px;
  width: 35px;
  text-align: center;
`;

export const Next = styled.div`
  ${(props) => Square(props)}
`;
