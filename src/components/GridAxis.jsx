import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import theme from 'styled-theming';

const topAxisFirstChildColor = theme('mode', {
  light: '#fff',
  dark: '#212529',
});

const topAxisFirstChildBorderColor = theme('mode', {
  light: '#fff',
  dark: '#212529',
});

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
          background-color: #e81539;
          flex-direction: row;
          border-right: 2px solid #212529;
          border-left: 2px solid ${topAxisFirstChildBorderColor};
        `
      : css`
          background-color: #0b24fb;
          flex-direction: column;
          border-bottom: 2px solid #212529;
          border-top: 2px solid #212529;
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
          height: ${({ height }) => `${height}px`};
          width: calc(100% / 11);
          border-right: 2px solid #212529;
          border-top: 2px solid #212529;
          &:first-child {
            border-top: 2px solid ${topAxisFirstChildBorderColor};
            background-color: ${topAxisFirstChildColor};
          }
          &:last-child {
            border-right: 0px;
          }
        `
      : css`
          height: calc(100% / 10);
          width: ${({ width }) => `${width}px`};
          border-bottom: 2px solid #212529;
          border-left: 2px solid #212529;
          &:last-child {
            border-bottom: 0px;
          }
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
