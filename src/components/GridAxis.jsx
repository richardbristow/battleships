import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

const LeftAxisAndGridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const StyledAxis = styled.div`
  display: flex;
  ${({ orientation }) =>
    orientation === 'top'
      ? css`
          background-color: red;
          flex-direction: row;
          border-right: 2px solid green;
          border-left: 2px solid green;
        `
      : css`
          background-color: blue;
          flex-direction: column;
          border-bottom: 2px solid yellow;
          border-top: 2px solid yellow;
        `};
`;

const StyledAxisSquare = styled.div`
  ${({ orientation }) =>
    orientation === 'top'
      ? css`
          height: ${({ height }) => `${height}px`};
          width: calc(100% / 10);
          border-right: 2px solid black;
          &:last-child {
            border-right: 0px;
          }
        `
      : css`
          height: calc(100% / 10);
          width: ${({ width }) => `${width}px`};
          border-bottom: 2px solid white;
          &:last-child {
            border-bottom: 0px;
          }
        `};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9vw;
`;

const GridAxis = ({ shipSquareDimensions, children }) => {
  const width = shipSquareDimensions && shipSquareDimensions.width / 10;
  const height = shipSquareDimensions && shipSquareDimensions.height / 10;

  return (
    <>
      <StyledAxis orientation="top">
        {['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(
          (letter) => (
            <StyledAxisSquare
              orientation="top"
              height={height}
              key={`top-${letter}`}
            >
              {letter}
            </StyledAxisSquare>
          )
        )}
      </StyledAxis>
      <LeftAxisAndGridWrapper>
        <StyledAxis orientation="left">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((num) => (
            <StyledAxisSquare
              orientation="left"
              width={width}
              key={`top-${num}`}
            >
              {num}
            </StyledAxisSquare>
          ))}
        </StyledAxis>
        {children}
      </LeftAxisAndGridWrapper>
    </>
  );
};

GridAxis.defaultProps = {
  children: null,
};

GridAxis.propTypes = {
  shipSquareDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
};

export default GridAxis;
