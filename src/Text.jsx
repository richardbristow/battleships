import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledText = styled.div`
  display: flex;
  margin-bottom: 16px;

  p {
    margin: 0px;
  }

  &.passed-elements {
    align-items: center;
  }

  .marker {
    padding-right: 16px;
  }
`;

const Text = ({ className, marker, children, textElementTag }) => {
  const CustomElement = textElementTag;
  const isObject = typeof children === 'object';

  return (
    <StyledText
      className={isObject ? `${className} passed-elements` : className}
    >
      {marker && <span className="marker">{marker}</span>}
      {isObject ? (
        <div>{children}</div>
      ) : (
        <CustomElement>{children}</CustomElement>
      )}
    </StyledText>
  );
};

Text.defaultProps = {
  marker: null,
  children: null,
  textElementTag: 'p',
};

Text.propTypes = {
  marker: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  textElementTag: PropTypes.string,
};

export default Text;
