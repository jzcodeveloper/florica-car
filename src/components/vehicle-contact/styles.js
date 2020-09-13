import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  line-height: 1.5em;

  @media (min-width: 1000px) {
    padding: 0;
    flex-direction: row;
  }
`;

export const Information = styled.div`
  flex: 0.3;
  border-right: 1px solid #dddddd;
  margin-right: 20px;
`;

export const Form = styled.form`
  flex: 0.7;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 1000px) {
    :first-child {
      margin-right: 20px;
    }
  }
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

export const Heading = styled.h4`
  margin-left: 15px;
`;

export const Text = styled.span`
  flex: 1;
  margin: 15px;
`;

export const Italic = styled.i`
  display: block;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #888888;
`;

export const Anchor = styled.a`
  color: var(--blue);

  :hover {
    text-decoration: underline;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Label = styled.label`
  font-size: 0.75em;
  text-transform: uppercase;
  color: #888888;
`;

export const Inputs = `
  width: 100%;
  padding: 12px 16px;
  background-color: #eeeeee;
  border: 2px solid transparent;
  color:#888888;
  margin-bottom: 15px;
  transition: all 0.25s ease-in-out;

  :focus {
    border: 2px solid var(--green);
    background-color: var(--white);
    color:#444444;
  }
`;

export const Input = styled.input`
  ${Inputs}
`;

export const TextArea = styled.textarea`
  ${Inputs}
  resize: none;
`;

export const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  padding: 14px;
  margin-top: 10px;
  border-radius: 3px;
  border-bottom: 2px solid var(--dark-green);
  color: var(--white);
  background-color: var(--blue);

  :active {
    transform: translateY(2px);
    border-bottom: 0px solid var(--dark-green);
  }

  @media (min-width: 1000px) {
    background-color: var(--green);
  }
`;
