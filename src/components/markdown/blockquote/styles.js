import styled from "styled-components";

export const Quote = styled.blockquote`
  position: relative;
  line-height: 1.5em;
  margin: 30px 0;
  font-style: italic;
  padding-left: 25px;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 10px;
    background-color: var(--green);
    border-radius: 3px;
    transform: skew(-1deg);
  }
`;
