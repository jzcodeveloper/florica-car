import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
`;

export const Images = styled.div`
  display: flex;
  transition: transform 1s ease;
  transform: translateX(calc(-100% * ${(props) => props.index}));
`;

export const Image = styled.img`
  cursor: pointer;
`;

export const Thumbnails = styled.div`
  display: flex;
  position: relative;
  margin-top: 3%;
  margin-bottom: 3%;
  transition: transform 1s ease;
  transform: translateX(
    calc(
      ${({ total }) => {
          const calc =
            -0.03833 * (total * total * total) +
            1.18143 * (total * total) -
            13.21452 * total +
            40.88457;

          return total <= 5 ? 0 : calc;
        }}% * ${(props) => props.index}
    )
  );
`;

export const Thumbnail = styled.img`
  margin-right: 3%;
  width: 17.6%;
  cursor: pointer;
  transition: filter 0.5s ease-in-out;
  filter: brightness(${(props) => (props.active ? "0.7" : "1")});

  :last-child {
    margin-right: 0;
  }
`;

export const Control = `
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
`;

export const Prev = styled.div`
  ${Control}
  left: 0;
  padding-right: 1.5%;
`;

export const Next = styled.div`
  ${Control}
  right: 0;
  padding-left: 1.5%;
`;

export const Icon = styled.i`
  color: white;
  font-size: 200%;
`;
