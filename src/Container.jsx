import styled from 'styled-components/macro';

const StyledContainer = styled.div`
  fieldset {
    border: 4px solid white;
    padding: 20px;
  }

  legend {
    font-size: 0.8em;
    width: auto;
    padding: 0px 4px;
    margin: 0px;
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
