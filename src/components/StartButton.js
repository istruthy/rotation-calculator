import React from 'react';
import { Button } from 'semantic-ui-react';

const StartButton = props => {
  return (
    <div>
      <Button onClick={props.startCountDown}>Start</Button>
    </div>
  );
};

export default StartButton;
