import styled from 'styled-components/macro';
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

export default Container;
