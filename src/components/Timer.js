import React from 'react';
import { Statistic, Icon } from 'semantic-ui-react';

const Timer = props => {
  return (
    <Statistic>
      <Statistic.Value>
        <Icon name="clock outline" size="huge" />
        <div class="ui huge header">
          {props.minutes}:{props.seconds}
        </div>
      </Statistic.Value>
      <Statistic.Label>minutes remaining</Statistic.Label>
    </Statistic>
  );
};

export default Timer;
