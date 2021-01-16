import styled from "styled-components";

const ColorTile = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid;
  background-color: ${({ cyan, magenta, yellow }) =>
    `rgb(${255 - cyan}, ${255 - magenta}, ${255 - yellow})`};
`;

ColorTile.defaultProps = {
  cyan: 0,
  magenta: 0,
  yellow: 0,
};

export default ColorTile;
