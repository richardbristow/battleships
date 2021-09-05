import styled from 'styled-components/macro';
import { useDrop } from 'react-dnd';

const StyledGridSquare = styled.div`
  background-color: lightskyblue;
  flex: 10%;
  padding-bottom: calc(10% - 2px);
  border-bottom: 2px solid #212529;
  border-right: 2px solid #212529;
`;

const GridSquare = () => <StyledGridSquare />;

export default GridSquare;
