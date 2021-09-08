import styled from 'styled-components/macro';

import Container from './components/Container';
import TyperBlock from './components/TyperBlock';
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
          <Typer
            characterDelay={18}
            nextBlockDelay={150}
            startTypingDelay={400}
          >
            <TyperBlock terminalText marker="&gt;">
              THE RULES OF WARFARE
            </TyperBlock>
            <TyperBlock terminalText marker="&gt;">
              Rules are coming soon!
            </TyperBlock>
            <TyperBlock terminalText marker="&gt;">
              WIN CONDITION: A game of battleships is won by the player who
              sinks all their opponents battleships first.
            </TyperBlock>
            <TyperBlock terminalText marker="&gt;" />
          </Typer>
        </ScrollbarCustom>
      </StyledRules>
    </Terminal>
  </StyleContainer>
);

export default Rules;
