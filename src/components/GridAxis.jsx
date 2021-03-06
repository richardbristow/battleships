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
          flex-direction: row;
          border-right: 2px solid transparent;
        `
      : css`
          flex-direction: column;
        `};
`;

const StyledAxisSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9vw;
  color: #fff;
  ${({ orientation }) =>
    orientation === 'top'
      ? css`
          background-color: #e81539;
          height: ${({ height }) => `${height}px`};
          width: calc(100% / 11);
          border-right: 2px solid #212529;
          border-bottom: 2px solid #212529;
          border-top: 2px solid #212529;
          &:first-child {
            width: calc((100% / 11) + 2px);
            border-top: 0px;
            background-color: transparent;
          }
        `
      : css`
          background-color: #0b24fb;
          height: calc(100% / 10);
          width: ${({ width }) => `${width}px`};
          border-bottom: 2px solid #212529;
          border-left: 2px solid #212529;
        `};
`;

const GridAxis = ({ shipSquareDimensions, children }) => (
  <>
    <StyledAxis orientation="top">
      {['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((letter) => (
        <StyledAxisSquare
          orientation="top"
          height={shipSquareDimensions.height / 10 || 0}
          key={`top-${letter}`}
        >
          {letter}
        </StyledAxisSquare>
      ))}
    </StyledAxis>
    <LeftAxisAndGridWrapper>
      <StyledAxis orientation="left">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((num) => (
          <StyledAxisSquare
            orientation="left"
            width={shipSquareDimensions.width / 10 || 0}
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
