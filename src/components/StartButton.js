import React from 'react';
import { Button } from 'semantic-ui-react';

const StartButton = props => {
  return (
    <div>
      <Button size="massive" onClick={props.startCountDown}>
        Start
      </Button>
    </div>
  );
};

export default StartButton;
