import styled from "styled-components";
import Background from "../../assets/images/slide_2.jpg";

export const Container = styled.div``;

export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 250px;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${Background});
    z-index: -1;
    filter: brightness(0.5);
  }
`;

export const Title = styled.h1`
  font-size: 2.3em;
  width: 100%;
  margin: 0 auto;
  text-transform: uppercase;
  color: var(--white);

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Main = styled.div`
  margin: 40px auto 60px auto;
  width: 100%;

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 20px;

  @media (min-width: 1000px) {
    flex-direction: row;
    margin: 50px 0;
    padding: 0;
  }
`;

export const Left = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    margin-right: 15px;
  }
`;

export const Right = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    margin-left: 15px;
  }
`;

export const Image = styled.img``;

export const Column = styled.div`
  width: 100%;
`;

export const Subtitle = styled.h2``;

export const Paragraph = styled.p`
  line-height: 1.5em;
`;

export const Text = styled.span`
  color: ${(props) => props.color || "inherit"};
`;

export const List = styled.ul`
  list-style: none;
  margin: 20px 0;
  padding: 0;
`;

export const Item = styled.li`
  margin: 20px 0;
`;

export const Icon = styled.i`
  margin-right: 20px;
  color: var(--green);
`;
