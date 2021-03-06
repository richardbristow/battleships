import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Ship from './components/Ship';
import Container from './components/Container';

const ships = [
  {
    shipName: 'ship2',
    size: 2,
  },
  {
    shipName: 'ship31',
    size: 3,
  },
  {
    shipName: 'ship32',
    size: 3,
  },
  {
    shipName: 'ship4',
    size: 4,
  },
  {
    shipName: 'ship5',
    size: 5,
  },
];

const StyledContainer = styled(Container)`
  flex: 22%;

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
      {ships.map(({ shipName, size }) => (
        <Ship
          key={shipName}
          size={size}
          shipName={shipName}
          shipSquareDimensions={shipSquareDimensions}
        />
      ))}
    </StyledShipPanel>
  </StyledContainer>
);

CommandPanel.propTypes = {
  shipSquareDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

export default CommandPanel;
