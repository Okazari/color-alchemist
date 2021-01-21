import styled from "styled-components";
import { boxShadow1, primaryLight1 } from "../../styles";

const ColorTileContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
  padding: 5px;
  margin: 10px;
  display: flex;
  box-shadow: ${boxShadow1};
  background-color: ${primaryLight1};
`;

const ColorTileInnerContainer = styled.div`
  flex: 1;
  border: 1px solid;
  background-color: ${({ cyan, magenta, yellow }) =>
    `rgb(${255 - cyan}, ${255 - magenta}, ${255 - yellow})`};
`;

ColorTileInnerContainer.defaultProps = {
  cyan: 0,
  magenta: 0,
  yellow: 0,
};

const ColorTile = (props) => (
  <ColorTileContainer>
    <ColorTileInnerContainer {...props}></ColorTileInnerContainer>
  </ColorTileContainer>
);

export default ColorTile;
