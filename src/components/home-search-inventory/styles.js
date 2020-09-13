import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  padding: 0 20px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Search = styled.button`
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9em;
  text-transform: uppercase;
  padding: 15px 25px;
  margin: 15px 20px;
  border-radius: 3px;
  border-bottom: 2px solid var(--dark-green);
  color: var(--white);
  background-color: var(--green);

  :active {
    transform: translateY(2px);
    border-bottom: 0px solid var(--dark-green);
  }
`;

export const Reset = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #aaaaaa;
  border: 2px solid #aaaaaa;
  font-weight: bold;
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 3px;
  margin: 15px 20px;
  background-color: transparent;
  transition: border 0.25s ease-in-out;

  :hover {
    border: 2px solid var(--green);
    color: var(--green);
  }
`;

export const Icon = styled.i`
  transition: color 0.5s ease-in-out;
  color: inherit;
  font-size: ${(props) => props.size || "1.1em"};
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0 0;
  padding: 20px;
  background-color: var(--blue);

  @media (min-width: 1000px) {
    margin: 30px 0;
    padding: 30px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--white);
  margin-bottom: 20px;
  font-size: 1.6em;

  @media (min-width: 1000px) {
    width: auto;
    margin-bottom: 0;
    font-size: 2em;
  }
`;

export const Phone = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--white);
  font-size: 1.6em;

  @media (min-width: 1000px) {
    width: auto;
    margin-bottom: 0;
    font-size: 2em;
  }
`;
