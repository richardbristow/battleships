import styled from 'styled-components/macro';

import Ship from './Ship';

const shipSize = [2, 3, 3, 4, 5];

const StyledPanel = styled.div`
  flex: 20%;
  border: 1px solid lightblue;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  justify-content: space-evenly;
`;

const Panel = ({ shipSquareDimensions }) => (
  <StyledPanel>
    {shipSize.map((size, index) => (
      <Ship
        key={`ship-${size}-${index}`}
        size={size}
        shipSquareDimensions={shipSquareDimensions}
      />
    ))}
  </StyledPanel>
);

export default Panel;
