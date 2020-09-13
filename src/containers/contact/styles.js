import styled from "styled-components";
import Background from "../../assets/images/slide_1.jpg";

export const Container = styled.div`
  overflow: hidden;
  background-image: url(${Background});
  background-position: center -65vh;
  background-repeat: no-repeat;
  padding-top: 50px;
`;

export const Section = styled.div`
  width: 100%;
  background-color: var(--white);
  padding: 20px;
  margin: 30px auto;
  border: 1px solid #dddddd;

  @media (min-width: 1000px) {
    width: 80%;
    margin: 60px auto;
    border: none;

    :first-of-type {
      padding: 40px;
      box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.33);
    }
    :not(:first-of-type) {
      padding: 0;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.3em;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Form = styled.form``;

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

export const Label = styled.label`
  font-size: 0.75em;
  text-transform: uppercase;
  color: #888888;
  margin-bottom: 10px;
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
  background-color: var(--green);

  :active {
    transform: translateY(2px);
    border-bottom: 0px solid var(--dark-green);
  }
`;
