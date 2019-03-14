import React from 'react';
import { Statistic } from 'semantic-ui-react';

const Timer = props => {
  return (
    <Statistic>
      <Statistic.Value>
        {props.minutes}:{props.seconds}
      </Statistic.Value>
      <Statistic.Label>minutes remaining</Statistic.Label>
    </Statistic>
  );
};

export default Timer;
