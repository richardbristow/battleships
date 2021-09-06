import styled from 'styled-components/macro';

import Container from './components/Container';
import Text from './components/Text';
import Terminal from './components/Terminal';
import Typer from './Typer';
import ScrollbarCustom from './components/ScrollbarCustom';

const StyledRules = styled.div`
  height: 60vh;
  overflow: auto;
`;

const StyleContainer = styled(Container)`
  position: relative;
  transform: translate3d(0, 0, 0);
`;

const Rules = () => (
  <StyleContainer title="WOPR-3000 Terminal">
    <Terminal>
      <StyledRules>
        <ScrollbarCustom>
          <Typer characterDelay={18} textBlockDelay={500}>
            <Text terminalText marker="&gt;">
              THE RULES OF WARFARE
            </Text>
            <Text terminalText marker="&gt;">
              Rules are coming soon!
            </Text>
            <Text terminalText marker="&gt;">
              WIN CONDITION: A game of battleships is won by the player who
              sinks all their opponents battleships first.
            </Text>
            <Text terminalText marker="&gt;" />
          </Typer>
        </ScrollbarCustom>
      </StyledRules>
    </Terminal>
  </StyleContainer>
);

export default Rules;
