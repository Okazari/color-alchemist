import styled from "styled-components";
import ColorTile from "./ColorTile";
import faker from "faker";
import ColorDeviation from "./ColorDeviation";
import { useSetState } from "react-use";
import ColorRange from "./ColorRange";
import Button from "./Button";
import { boxShadow1, radius } from "../styles";

const GameContainer = styled.div`
  padding: 10px;
  max-width: 500px;
  background-color: #bdb285;
  box-shadow: ${boxShadow1};
  border-radius: ${radius};
`;

const GameInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 500px;
  background-color: #e9e2b4;
  box-shadow: ${boxShadow1};
  border-radius: ${radius};
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const modelColor = {
  cyan: faker.random.number(255),
  magenta: faker.random.number(255),
  yellow: faker.random.number(255),
};

const App = () => {
  const [playerColor, setPlayerColor] = useSetState({
    cyan: 0,
    magenta: 0,
    yellow: 0,
  });
  return (
    <GameContainer>
      <GameInnerContainer>
        <Center>
          <ColorTile {...modelColor} />
          <ColorRange
            label="cyan"
            value={playerColor.cyan}
            onChange={(cyan) => setPlayerColor({ cyan })}
          />
          <ColorRange
            label="magenta"
            value={playerColor.magenta}
            onChange={(magenta) => setPlayerColor({ magenta })}
          />
          <ColorRange
            label="yellow"
            value={playerColor.yellow}
            onChange={(yellow) => setPlayerColor({ yellow })}
          />
          <ColorTile {...playerColor} />
          {/* <ColorDeviation from={modelColor} to={playerColor} /> */}
        </Center>
        <Button>Submit</Button>
      </GameInnerContainer>
    </GameContainer>
  );
};

export default App;
