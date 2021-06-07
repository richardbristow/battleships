import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledText = styled.div`
  display: flex;

  .marker {
    padding-right: 16px;
  }
`;

const Text = ({ marker, children, textElementTag }) => {
  const CustomElement = textElementTag;

  return (
    <StyledText>
      {marker && <span className="marker">{marker}</span>}
      <CustomElement>{children}</CustomElement>
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
    PropTypes.arrayOf(PropTypes.element),
  ]),
  textElementTag: PropTypes.string,
};

export default Text;
