import styled from 'styled-components/macro';

const StyledGridSquare = styled.div`
  background-color: lightskyblue;
  flex: 10%;
  padding-bottom: calc(10% - 2px);
  border-bottom: 2px solid #212529;
  border-right: 2px solid #212529;
  &:nth-child(10n) {
    border-right: 0px;
  }
  &:nth-child(n + 91) {
    border-bottom: 0px;
    padding-bottom: 10%;
  }
`;

const GridSquare = () => <StyledGridSquare />;

export default GridSquare;
