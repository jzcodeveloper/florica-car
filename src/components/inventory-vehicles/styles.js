import styled from "styled-components";

export const Container = styled.div``;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0 15px 0;
`;

export const Sort = styled.div`
  display: flex;
  align-items: center;
`;

export const View = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  display: none;
  text-transform: uppercase;
  font-size: 0.8em;

  @media (min-width: 1000px) {
    display: inline-block;
    margin-right: 10px;
  }
`;

export const Icons = styled.div`
  cursor: pointer;
  padding: 8px 10px;
  margin-right: 5px;
  background-color: ${(props) =>
    props.active ? "var(--gray)" : "transparent"};

  :last-child {
    margin-right: 0;
  }
`;

export const Icon = styled.i`
  transition: color 0.25s ease;
  color: #aaaaaa;

  ${Icons}:hover & {
    color: var(--green);
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  grid-gap: ${(props) => (props.view_type === "list" ? "0" : "50px")} 30px;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(
      ${(props) => (props.view_type === "list" ? "1" : "2")},
      1fr
    );
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      ${(props) => (props.view_type === "list" ? "1" : "3")},
      1fr
    );
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
