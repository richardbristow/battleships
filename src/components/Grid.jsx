import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

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
`;

const Grid = forwardRef(({ type }, ref) => (
  <StyledContainer title={type}>
    <StyledGridSquareWrapper ref={ref}>
      {[...Array(100).keys()].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <GridSquare key={`gridsquare-${index}`} />
      ))}
    </StyledGridSquareWrapper>
  </StyledContainer>
));

Grid.defaultProps = {
  type: null,
};

Grid.propTypes = {
  type: PropTypes.string,
};

export default Grid;
