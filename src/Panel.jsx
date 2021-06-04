import styled from 'styled-components/macro';

import Ship from './Ship';

const shipSize = [2, 3, 3, 4, 5];

const StyledPanel = styled.div`
  flex: 20%;
  border: 1px solid lightblue;

  display: flex;
  flex-wrap: wrap;
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
