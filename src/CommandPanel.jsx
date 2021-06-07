import styled from 'styled-components/macro';

import Ship from './Ship';
import Container from './Container';

const shipSize = [2, 3, 3, 4, 5];

const StyledContainer = styled(Container)`
  flex: 20%;

  fieldset {
    min-height: 100%;
  }
`;

const StyledInfoPanel = styled.div`
  padding-bottom: 4px;
  p {
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
  <StyledContainer title="Command">
    <StyledInfoPanel>
      <p>Place ships on the player grid to begin.</p>
      <p>Double click/tap on the ships to rotate before placement.</p>
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
  </StyledContainer>
);

export default CommandPanel;
