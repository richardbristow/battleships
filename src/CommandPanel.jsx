import styled from 'styled-components/macro';

import Ship from './Ship';

const shipSize = [2, 3, 3, 4, 5];

const StyledCommandPanel = styled.div`
  flex: 20%;
  border: 1px solid lightblue;
  padding: 20px;
  min-height: 100%;
`;

const StyledInfoPanel = styled.div`
  color: white;
  padding-bottom: 4px;
  p {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.8em;
    margin-top: 0px;
  }
`;

const StyledShipPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
`;

const CommandPanel = ({ shipSquareDimensions }) => (
  <StyledCommandPanel>
    <StyledInfoPanel>
      <p>Place your ships on the player grid to begin.</p>
      <p>Double click/tap on the ships to rotate before placment.</p>
    </StyledInfoPanel>
    <StyledShipPanel>
      {shipSize.map((size, index) => (
        <Ship
          key={`ship-${size}-${index}`}
          size={size}
          shipSquareDimensions={shipSquareDimensions}
        />
      ))}
    </StyledShipPanel>
  </StyledCommandPanel>
);

export default CommandPanel;
