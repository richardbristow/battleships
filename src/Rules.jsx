import styled from 'styled-components/macro';

import Container from './Container';
import Text from './Text';

const StyledRules = styled.div`
  height: 60vh;
`;

const Rules = () => (
  <Container title="WOPR-3000 Terminal">
    <StyledRules>
      <Text marker="&gt;">THE RULES OF WARFARE</Text>
      <Text marker="&gt;">Rules are coming soon!</Text>
      <Text marker="&gt;">
        WIN CONDITION: A game of battleships is won by the player who sinks all
        their opponents battleships first.
      </Text>
    </StyledRules>
  </Container>
);

export default Rules;
