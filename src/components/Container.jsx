import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import theme from 'styled-theming';

const borderColor = theme('mode', {
  light: '#212529',
  dark: '#fff',
});

const StyledContainer = styled.div`
  fieldset {
    border: 4px solid ${borderColor};
    padding: 20px;
  }

  legend {
    font-size: 0.8em;
    width: auto;
    padding: 0px 4px;
    margin: 0px;
    border: 4px solid ${borderColor};
  }
`;

const Container = ({ children, className, title }) => (
  <StyledContainer className={className}>
    <fieldset>
      {title && <legend>{title}</legend>}
      {children}
    </fieldset>
  </StyledContainer>
);

Container.defaultProps = {
  className: null,
  title: null,
  children: null,
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Container;
