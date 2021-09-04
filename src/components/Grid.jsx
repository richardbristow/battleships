import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import GridAxis from './GridAxis';
import GridSquare from './GridSquare';
import Container from './Container';

const StyledContainer = styled(Container)`
  flex: 50%;

  fieldset {
    padding: 12px;
  }
`;

const StyledGridSquareWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid #212529;
  width: 100%;
`;

const Grid = forwardRef(({ type, shipSquareDimensions }, ref) => (
  <StyledContainer title={type}>
    <GridAxis shipSquareDimensions={shipSquareDimensions}>
      <StyledGridSquareWrapper ref={ref}>
        {[...Array(100).keys()].map((keyNum) => (
          <GridSquare key={`gridsquare-${keyNum}`} />
        ))}
      </StyledGridSquareWrapper>
    </GridAxis>
  </StyledContainer>
));

Grid.defaultProps = {
  type: null,
};

Grid.propTypes = {
  type: PropTypes.string,
  shipSquareDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

export default Grid;
