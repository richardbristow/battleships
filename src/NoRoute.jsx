import { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components/macro';
import { useHistory } from 'react-router';

import LinkCustom from './LinkCustom';
import Container from './Container';
import PixelArt from './PixelArt';
import Progress from './Progress';
import Text from './Text';

const StyledNoRoute = styled(Container)`
  progress {
    margin-top: 20px;
  }
`;

const NoRoute = ({ theme }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const history = useHistory();

  useEffect(() => {
    if (timeLeft === 0) {
      history.push('/');
      return;
    }
    const timerID = setInterval(() => setTimeLeft(timeLeft - 1), 1000);

    return () => clearInterval(timerID);
  }, [history, timeLeft]);

  return (
    <StyledNoRoute title="Error: 404">
      <Text marker="&gt;">
        <PixelArt
          name="sadSmiley"
          theme={theme.mode}
          alt="error 404 page not found"
          height="50px"
        />
      </Text>
      <Text marker="&gt;">
        Whoops! You've stumbled upon a page that doesn't exist.
      </Text>
      <Text marker="&gt;">
        <p>
          You'll be redirected back <LinkCustom to="/">home</LinkCustom> in...{' '}
          {timeLeft} seconds.
        </p>
      </Text>
      <Progress dark type="is-warning" value={(10 - timeLeft) * 10} max="100" />
    </StyledNoRoute>
  );
};

export default withTheme(NoRoute);
