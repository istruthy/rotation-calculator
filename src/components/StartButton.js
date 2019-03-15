import React from 'react';
import { Button } from 'semantic-ui-react';

const StartButton = props => {
  return (
    <div>
      <Button floated="right" content="Start" onClick={props.startCountDown} primary />
      <Button floated="right" content="Clear" secondary />
    </div>
  );
};

export default StartButton;
