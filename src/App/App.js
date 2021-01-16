import styled from "styled-components";
import ColorTile from "./ColorTile";
import faker from "faker";
import ColorDeviation from "./ColorDeviation";
import { useSetState } from "react-use";
import ColorRange from "./ColorRange";

const AppContainer = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
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
    <AppContainer>
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
      <ColorDeviation from={modelColor} to={playerColor} />
    </AppContainer>
  );
};

export default App;
